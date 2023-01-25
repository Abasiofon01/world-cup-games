<template>
  <footer>
    <div class="default-container">
      <div>
        <img
          src="../assets/world-cup-2022-logo.png"
          alt="world cup logo 2022"
          class="logo"
        />
        <ul class="footer-links-wrapper">
          <li class="footer-links" v-for="link in links">
            <router-link :to="link.link">
              {{ link.name }}
            </router-link>
          </li>
        </ul>
        <p class="copyright">&copy; 2022</p>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  setup() {
    const links = [
      { name: "TEAMS", link: "/teams" },
      { name: "GROUPS", link: "/groups" },
      { name: "MATCHES", link: "/matches" },
      { name: "STANDINGS", link: "/standings" },
    ];
    return { links };
  },
};
</script>
<style lang="css" scoped>
footer {
  @apply py-2;
  background-color: gainsboro;
  margin-top: 2rem;
}

.default-container > div {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.logo {
  align-self: center;
}
.footer-links-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer-links {
  @apply font-bold m-2;
  color: #830542;
  font-size: clamp(0.75rem, 0.6291rem + 0.7737vw, 1rem);
}

.copyright {
  color: #830542;
  text-align: center;
  font-size: small;
}
</style>
