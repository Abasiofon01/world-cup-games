<template>
  <div :class="[wrapperClass]">
    <h1 class="page-heading">
      <slot name="title"></slot>
    </h1>

    <button v-if="showNewBtn" type="button" @click="createNew">New</button>

    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "Layout",

    props: {
      wrapperClass: {
        type: String,
        required: true
      },
      showNewBtn: {
        type: Boolean,
        default: true
      }
    },

    methods: {
      createNew() {
        this.$emit("create-new");
      }
    }
  };
</script>
