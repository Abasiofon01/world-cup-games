<template>
  <div>
    <header>
      <Nav></Nav>
    </header>
    <main class="main-slot">
      <section class="default-container">
        <router-view />
      </section>
    </main>
    <FooterVue />
  </div>
</template>

<script>
  import FooterVue from "./components/Footer.vue";
  import Nav from "./components/Nav.vue";

  export default {
    name: "App",
    components: { Nav, FooterVue },

    watch: {
      $route: {
        handler: function (route) {
          if (route.meta.title) {
            document.title = route.meta.title;
          }
        }
      }
    }
  };
</script>

<style>
  header {
    @apply py-2 relative;
    background-color: gainsboro;
  }
</style>
