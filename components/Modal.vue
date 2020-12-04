<template>
  <transition name="fade">
    <div @keydown.esc="open = !open">
      <div role="button" class="select-none" @click.prevent="open = !open">
        <slot name="link"></slot>
      </div>

      <div
        v-show="open"
        class="bg-neutral-9 absolute top-0 left-0 h-screen w-full flex items-center justify-center bg-gray-900 bg-opacity-80"
      >
        <div class="modal bg-white p-4 rounded w-1/2 md:w-1/3">
          <slot name="header">
            Header content goes here
          </slot>
          <slot name="body">
            Body content goes here
          </slot>
          <button
            v-on:click="toggle"
            class="mt-4 bg-yellow-5 rounded p-2 font-semibold"
          >
            Stäng
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      open: false,
    };
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
  },
  created() {},
};
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>