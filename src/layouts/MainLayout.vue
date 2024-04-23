<script setup>
let currentYear = new Date().getFullYear();
</script>

<template>
  <main>
    <img
      class="absolute w-full h-full pointer-events-none opacity-15"
      src="/public/Noise.png"
      alt="Noise pattern"
    />
    <div class="h-screen flex flex-col items-center justify-center mx-auto px-5 sm:max-w-[600px]">
      <h1 class="text-3xl lg:text-5xl font-bold text-white text-center mb-5 z-10">
        {{ currentYear }} PROGRESS
      </h1>
      <slot />
    </div>
  </main>
</template>

<style scoped>


main {
  background: hsla(191, 75%, 60%, 1);

  background: linear-gradient(
    90deg,
    hsla(191, 75%, 60%, 1) 0%,
    hsla(248, 87%, 36%, 1) 100%
  );

  background: -moz-linear-gradient(
    90deg,
    hsla(191, 75%, 60%, 1) 0%,
    hsla(248, 87%, 36%, 1) 100%
  );

  background: -webkit-linear-gradient(
    90deg,
    hsla(191, 75%, 60%, 1) 0%,
    hsla(248, 87%, 36%, 1) 100%
  );

  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#4DC9E6", endColorstr="#210CAE", GradientType=1 );
}
</style>
