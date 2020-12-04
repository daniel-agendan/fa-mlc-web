<template>
  <div
    class="w-full flex-1 bg-cover bg-center"
    :style="{ backgroundImage: `url(${backgroundUrl})` }"
  >
    <div
      class="inline-block h-full items-center justify-center w-full bg-gray-900 bg-opacity-50"
    >
      <div class="h-full w-full text-center items-center justify-center flex flex-col">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import backgroundUrl from '~/assets/advertising-screen-min.jpg';
export default {
  data() {
    return { backgroundUrl };
  },
};
</script>
