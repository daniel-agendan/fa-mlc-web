<template>
  <div
    class="w-full flex-1 bg-cover bg-center"
    :style="{ backgroundImage: `url(${backgroundUrl})` }"
  >
    <div
      class="relative h-full w-full bg-gray-900 bg-opacity-50"
    >
      <div class="absolute mx-auto h-full w-full flex flex-col items-center justify-center">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import backgroundUrl from '~/assets/rental-screen-min.jpg'
export default {
  data() {
    return { backgroundUrl }
  }
}
</script>