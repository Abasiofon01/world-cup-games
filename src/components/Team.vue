<template>
  <div class="img-and-country">
    <img :src="getFlag(teamData)" :alt="teamData.country" />
    <p class="country">{{ teamData.name }}</p>

    <button
      data-title="Edit"
      id="btn"
      type="button"
      @click="$router.push({ name: 'edit_team', params: { id: teamData.id } })"
    >
      <i class="uil uil-edit"></i>
    </button>
  </div>
</template>
<script>
export default {
  name: "Team",

  props: {
    teamData: {
      type: Object,
      required: true,
    },
  },

  methods: {
    getFlag(team) {
      return team.flag ? team.flag : "https://flagcdn.com/h60/be.png";
    },
  },
};
</script>
<style lang="css">
.img-and-country {
  display: flex;
  align-items: center;
  background-color: gainsboro;
  gap: 8px;
  border-radius: 3.34px;
  padding: 9px;
}

.img-and-country img {
  width: 29px;
  height: 18px;
}

.country {
  font-size: clamp(0.75rem, 0.6291rem + 0.7737vw, 1rem);
  color: #830542;
  font-weight: bold;
}

@media (max-width: 320px) {
  .img-and-country img {
    width: 20.75px;
    height: 14.3px;
  }
}
</style>
