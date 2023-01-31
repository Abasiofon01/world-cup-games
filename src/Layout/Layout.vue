<template>
  <div :class="[wrapperClass]">
    <h1 class="page-heading">
      <slot name="title"></slot>
    </h1>

    <div class="icon-wrapper" @click="goBack" v-if="showBackBtn">
      <svg
        id="back_icon"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.02686 11.9928L5.2623 16.2426L6.67889 14.8308L4.85754 13.0032L22.9729 13.0011L22.9727 11.0011L4.85297 11.0032L6.68848 9.17392L5.27665 7.75732L1.02686 11.9928Z"
        />
      </svg>
    </div>

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
        required: true
      },
      showNewBtn: {
        type: Boolean,
        default: true
      },
      showBackBtn: {
        type: Boolean,
        default: true
      }
    },

    methods: {
      createNew() {
        this.$emit("create-new");
      },
      goBack() {
        this.$emit("go-back");
      }
    }
  };
</script>

<style scoped>
  #btn {
    padding: 5px 20px;
    color: #830542;
    background-color: gainsboro;
    border-radius: 4px;
    align-self: center;
    display: inline;
    margin-bottom: 18px;
  }

  .icon-wrapper {
    width: 25px;
    background-color: gainsboro;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    cursor: pointer;
  }

  #back_icon {
    padding: 4px;
    fill: #830542;
    width: 25px;
    height: 25px;
  }
</style>
