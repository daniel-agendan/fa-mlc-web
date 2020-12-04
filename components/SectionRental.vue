<template>
  <div
    class="w-full h-1/2 md:h-full bg-cover bg-center"
    :style="{ backgroundImage: `url(${backgroundUrl})` }"
  >
    <div
      class="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50"
    >
      <div class="text-center flex flex-col">
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