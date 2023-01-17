<template>
  <div :class="[wrapperClass]">
    <h1 class="page-heading">
      <slot name="title"></slot>
    </h1>
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
      }
    }
  };
</script>
