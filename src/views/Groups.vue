<template>
  <Layout
    @create-new="$router.push({ name: 'new_group' })"
    wrapperClass="groups-wrapper"
    :showBackBtn="false"
  >
    <template #title> Groups </template>

    <div class="groups">
      <div class="double-group">
        <div v-for="group in allGroups" :key="group.name">
          <p class="group-heading">group {{ group.name }}</p>
          <div id="team">
            <div
              v-for="team in group.teams"
              :key="team.name"
              class="img-and-country"
            >
              <img :src="team.flag" :alt="team.name" />
              <p class="country">{{ team.name }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from "../Layout/Layout.vue";
import { mapActions } from "vuex";

export default {
  name: "Groups",

  components: { Layout },

  data() {
    return {
      allGroups: {
        type: Array,
        required: true,
      },
    };
  },

  methods: {
    ...mapActions(["fetchAllGroups"]),
  },

  async created() {
    await this.fetchAllGroups().then((allGroupsData) => {
      this.allGroups = allGroupsData.data;
      console.log(this.allGroups);
    });
  },
};
</script>

<style lang="css">
.groups-wrapper {
  margin-top: 18px;
  display: flex;
  flex-direction: column;
  @apply mx-auto;
}

.groups {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

@media (max-width: 375px) {
  .groups {
    gap: 12px;
  }
}
@media (max-width: 320px) {
  .groups {
    gap: 6px;
  }

  #team {
    margin-top: 6px;
  }
}

.double-group {
  @apply grid grid-cols-2 gap-3;
}

@media (max-width: 375px) {
  .double-group {
    @apply grid-cols-1;
  }
}

.group-heading {
  font-size: clamp(0.75rem, 0.5687rem + 1.1605vw, 1.125rem);
  color: white;
  font-weight: bold;
  text-transform: capitalize;
}

#team {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 12px;
}
</style>
