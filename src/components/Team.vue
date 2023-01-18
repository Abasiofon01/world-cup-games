<template>
  <div class="team">
    <img :src="getFlag(teamData)" :alt="teamData.country" />
    <p>{{ teamData.name }}</p>

    <button
      type="button"
      @click="$router.push({ name: 'edit_team', params: { id: teamData.id } })"
    >
      Edit
    </button>
  </div>
</template>
<script>
  export default {
    name: "Team",

    props: {
      teamData: {
        type: Object,
        required: true
      }
    },

    methods: {
      getFlag(team) {
        return team.flag ? team.flag : "https://flagcdn.com/h60/be.png";
      }
    }
  };
</script>
<style lang="css">
  .team {
    display: flex;
    gap: 8.58px;
    align-items: center;
    background-color: white;
    border-radius: 2.5px;
    height: 42px;
    padding: 11px;
  }

  .team button {
    justify-self: flex-end;
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
