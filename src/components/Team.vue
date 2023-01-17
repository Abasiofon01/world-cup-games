<template>
  <div v-for="team in teams" :key="team.country" class="team">
    <img :src="team.flag" :alt="team.country" />
    <p>{{ team.country }}</p>
  </div>

  <div>
    <div v-for="post in posts" v-bind:key="post.id">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
  </div>

</template>
<script>
import { teams } from "../utils";


export default {

  name: "Team",

  data() {
    return { teams };
  },

  computed: {
    posts() {
      console.log(this.$store.getters.posts);
      return this.$store.getters.posts;

    },
  },

  teams() {
    console.log(this.$store.getters.teams);
  },
  
  created() {
    this.$store.dispatch('loadPosts');
    this.$store.dispatch('getTeams');
  },
}

</script>
<style lang="css" scoped>
.team {
  display: flex;
  gap: 8.58px;
  align-items: center;
  background-color: white;
  border-radius: 2.5px;
  height: 42px;
  padding: 11px;
}

.team img {
  width: 25.75px;
  height: 17.3px;
}

@media (max-width: 320px) {
  .team img {
    width: 20.75px;
    height: 14.3px;
  }
}

.team p {
  font-size: clamp(0.75rem, 0.6291rem + 0.7737vw, 1rem);
  color: #830542;
  font-weight: bold;
}
</style>
