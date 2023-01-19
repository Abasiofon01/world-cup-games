<template>
  <div :class="[wrapperClass]">
    <h1 class="page-heading">
      <slot name="title"></slot>
    </h1>

    <button id="btn" v-if="showNewBtn" type="button" @click="createNew">
      New
    </button>

    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Layout",

  props: {
    wrapperClass: {
      type: String,
      required: true,
    },
    showNewBtn: {
      type: Boolean,
      default: true,
    },
  },

  methods: {
    createNew() {
      this.$emit("create-new");
    },
  },
};
</script>

<style scoped>
#btn {
  padding: 5px 20px;
  color: #830542;
  background-color: white;
  border-radius: 4px;
  align-self: center;
  display: inline;
  margin-bottom: 18px;
}
</style>
