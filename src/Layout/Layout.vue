<template>
  <div>
    <header class="header-slot">
      <Nav></Nav>
    </header>
    <main class="main-slot">
      <slot></slot>
    </main>
    <FooterVue />
  </div>
</template>

<script>
import FooterVue from "../components/Footer.vue";
import Nav from "../components/Nav.vue";
export default {
  name: "Layout",
  components: { Nav, FooterVue },
};
</script>

<style scoped>
header{
  @apply bg-white py-2 relative ;

}
</style>
