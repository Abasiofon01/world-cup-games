<template>
  <Layout
    @create-new="$router.push({ name: 'new_group' })"
    wrapperClass="groups-wrapper"
    :showBackBtn="false"
  >
    <template #title> Groups </template>

    <div class="groups">
      <Group />
    </div>
  </Layout>
</template>
<script>
import Group from "../components/Group.vue";
import Layout from "../Layout/Layout.vue";

export default {
  name: "Groups",
  components: { Group, Layout },
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
}
</style>
