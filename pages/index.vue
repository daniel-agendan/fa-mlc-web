<template>
  <div class="flex flex-col md:flex-row h-screen w-screen mx-auto bg-white">
    <div class="md:hidden bg-black text-white p-2 flex">
      <p class=" font-bold uppercase">Fa-mlc</p>
      <span class="ml-1">I Kristianstad</span>
    </div>
    <div
      class="absolute top-10 inset-x-0 shadow-xl bg-gray-400 w-4/12 lg:w-3/12 mx-auto rounded-lg invisible md:visible text-center ring-4 ring-gray-300"
    >
      <p class="pt-4 uppercase font-extrabold text-6xl font-mono">fa-mlc</p>
      <div
        class="mt-1 flex items-center justify-center divide-x divide-green-900"
      >
        <div class="pr-2 uppercase font-semibold">Reklam</div>
        <div class="pl-2 uppercase font-semibold">Uthyrning</div>
      </div>
      <div class="pb-4 mt-1 text-sm">
        <p class=" text-gray-700 uppercase">
          Säte: Kristianstad
        </p>
      </div>
    </div>
    <SectionAdvertising>
      <div>
        <h1 class="text-white text-2xl font-semibold uppercase md:text-3xl">
          Vill du synas?
        </h1>
      </div>

      <div class="mt-5">
        <ModalGlobal>
          <span slot="link">
            kontakta oss idag
          </span>
          <div
            slot="header"
            class="mb-3 font-bold text-lg uppercase md:text-3xl"
          >
            områdesskyltar
          </div>
          <div slot="body" class="">
            <p class="mb-4">
              Vi har områdesskyltar runt om i södra sverige. Vi står för print,
              leverans och montage. Vi erbjuder skylt och dekor i alla tänkbara
              varianter. Kontakta oss idag med din förfrågan.
            </p>
            <a href="tel:+46723199833" class="text-sm underline md:text-2xl"
              >+(46) 723199833
            </a>
          </div>
        </ModalGlobal>
      </div>
    </SectionAdvertising>
    <SectionRental>
      <div>
        <h1 class="text-white text-2xl font-semibold uppercase md:text-3xl">
          hyrsläp från 99kr
        </h1>
      </div>

      <div class="mt-5">
        <ModalGlobal>
          <span slot="link">
            boka här
          </span>
          <div
            slot="header"
            class="mb-3 font-bold text-lg uppercase md:text-3xl"
          >
            hyrsläpar
          </div>
          <div slot="body" class="">
            <p class="mb-4">
              Ska du fixa i trädgården eller röja i garaget!? Inga problem vi
              har gallersläp, kåpsläp och skåpsläp till uthyres
            </p>
            <p class="mb-3 text-2xl font-bold">
              Från 99 kr
            </p>
            <p class="mb-3">
              Vår uthyrningsdepå ligger på Helegedal i Kristianstad, Alevägen 1
              Kristianstad.
            </p>
            <a href="tel:+46723199833" class="text-sm underline md:text-2xl"
              >+(46) 723199833
            </a>
          </div>
        </ModalGlobal>
      </div>
    </SectionRental>
  </div>
</template>

<script>
export default {
  transition: 'home',
};
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}

.layout-enter-active,
.layout-leave-active {
  transition: opacity 0.5s;
}
.layout-enter,
.layout-leave-to {
  opacity: 0;
}

.slide-bottom-enter-active,
.slide-bottom-leave-active {
  transition: opacity 0.25s ease-in-out, transform 0.25s ease-in-out;
}
.slide-bottom-enter,
.slide-bottom-leave-to {
  opacity: 0;
  transform: translate3d(0, 15px, 0);
}
.bounce-enter-active {
  transform-origin: top;
  animation: bounce-in 0.8s;
}
.bounce-leave-active {
  transform-origin: top;
  animation: bounce-out 0.5s;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes bounce-out {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(0);
  }
}
</style>
