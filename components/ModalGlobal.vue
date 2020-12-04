<template>
  <div @keydown.esc="show = !show">
    <button
      @click.prevent="show = !show"
      class="px-4 py-2 bg-gray-600 text-white text-sm uppercase font-medium rounded ring-4 ring-gray-300 focus:outline-none"
    >
      <slot name="link">
        Open Modal
      </slot>
    </button>
    <transition name="fade">
      <div
        v-show="show"
        @click.self="show = !show"
        class="absolute top-0 left-0 h-screen w-full flex items-center justify-center bg-gray-200 bg-opacity-50"
      >
        <div class="shadow-lg bg-white p-4 rounded w-full mx-6 md:w-1/3">
          <slot name="header">
            Header content goes here
          </slot>
          <slot name="body">
            Body content goes here
          </slot>
          <button
            v-on:click="show = !show"
            class="mt-4 bg-yellow-5 rounded p-2 font-semibold"
          >
            Stäng
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  methods: {
    externalClick(event) {
      console.log('External click. Event: ', event);
    },
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.slide-bottom-enter-active,
.slide-bottom-leave-active {
  transition: opacity 2s ease-in-out, transform 2s ease-in-out;
}
</style>
