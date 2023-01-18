<template>
  <div class="double-group">
    <div class="group">
      <p class="group-heading">Group A</p>
      <div id="team">
        <div v-for="team in groupA" class="img-and-country">
          <img :src="team.flag" :alt="team.country" />
          <p class="country">{{ team.country }}</p>
        </div>
      </div>
    </div>
    <div class="group">
      <p class="group-heading">Group B</p>
      <div id="team">
        <div v-for="team in groupB" class="img-and-country">
          <img :src="team.flag" :alt="team.country" />
          <p class="country">{{ team.country }}</p>
        </div>
      </div>
    </div>
  </div>
  <div class="double-group">
    <div class="group">
      <p class="group-heading">Group C</p>
      <div id="team">
        <div v-for="team in groupC" class="img-and-country">
          <img :src="team.flag" :alt="team.country" />
          <p class="country">{{ team.country }}</p>
        </div>
      </div>
    </div>
    <div class="group">
      <p class="group-heading">Group D</p>
      <div id="team">
        <div v-for="team in groupD" class="img-and-country">
          <img :src="team.flag" :alt="team.country" />
          <p class="country">{{ team.country }}</p>
        </div>
      </div>
    </div>
  </div>
  <div class="double-group">
    <div class="group">
      <p class="group-heading">Group E</p>
      <div id="team">
        <div v-for="team in groupE" class="img-and-country">
          <img :src="team.flag" :alt="team.country" />
          <p class="country">{{ team.country }}</p>
        </div>
      </div>
    </div>
    <div class="group">
      <p class="group-heading">Group F</p>
      <div id="team">
        <div v-for="team in groupF" class="img-and-country">
          <img :src="team.flag" :alt="team.country" />
          <p class="country">{{ team.country }}</p>
        </div>
      </div>
    </div>
  </div>
  <div class="double-group">
    <div class="group">
      <p class="group-heading">Group G</p>
      <div id="team">
        <div v-for="team in groupG" class="img-and-country">
          <img :src="team.flag" :alt="team.country" />
          <p class="country">{{ team.country }}</p>
        </div>
      </div>
    </div>
    <div class="group">
      <p class="group-heading">Group H</p>
      <div id="team">
        <div v-for="team in groupH" class="img-and-country">
          <img :src="team.flag" :alt="team.country" />
          <p class="country">{{ team.country }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { teams } from "../utils";
export default {
  name: "group",

  data() {
    return { teams };
  },

  computed: {
    groupA() {
      return this.teams.slice(0, 4);
    },
    groupB() {
      return this.teams.slice(4, 8);
    },
    groupC() {
      return this.teams.slice(8, 12);
    },
    groupD() {
      return this.teams.slice(12, 16);
    },
    groupE() {
      return this.teams.slice(16, 20);
    },
    groupF() {
      return this.teams.slice(20, 24);
    },
    groupG() {
      return this.teams.slice(24, 28);
    },
    groupH() {
      return this.teams.slice(28, 32);
    },
  },
};
</script>
<style lang="css">
.double-group {
  @apply grid grid-cols-2 gap-3;
}

@media (max-width: 375px) {
  .double-group {
    @apply grid-cols-1;
  }
}
.group {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.group-heading {
  font-size: clamp(0.75rem, 0.5687rem + 1.1605vw, 1.125rem);
  color: white;
  font-weight: bold;
}

#team {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.group {
  gap: 6px;
}
.country {
  font-size: clamp(0.75rem, 0.6291rem + 0.7737vw, 1rem);
  color: #830542;
  font-weight: bold;
}
</style>
