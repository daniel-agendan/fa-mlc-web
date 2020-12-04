<template>
  <div
    class="w-full flex-grow bg-cover bg-center"
    :style="{ backgroundImage: `url(${backgroundUrl})` }"
  >
    <div
      class="flex items-center justify-center flex-grow w-full bg-gray-900 bg-opacity-50"
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