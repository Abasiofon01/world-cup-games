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
.img-and-country #btn {
  margin-left: auto;
  color: #830542;
}
.img-and-country #btn:hover {
  scale: 120%;
  font-weight: 700;
}

[data-title]:hover:after {
  opacity: 1;
  transition: all 0.1s ease 0.5s;
  visibility: visible;
}
[data-title]:after {
  content: attr(data-title);
  position: absolute;
  top: -2.2em;
  font-size: 10px;
  right: 0;
  padding: 0px 6px;
  background-color: #830542;
  color: gainsboro;
  white-space: nowrap;
  -moz-border-radius: 4px;
  -webkit-border-radius: 4px;
  border-radius: 4px;
  opacity: 0;
  z-index: 99999;
  visibility: hidden;
}
[data-title] {
  position: relative;
}
</style>
