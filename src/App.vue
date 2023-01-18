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
    components: { Nav, FooterVue }
  };
</script>

<style>
  header {
    @apply bg-white py-2 relative;
  }
</style>
