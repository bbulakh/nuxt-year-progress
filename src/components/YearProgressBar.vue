<template>
  <div class="progress-bar rounded-xl w-full h-[50px] bg-white z-10 text-white">
    <div
      class="progress rounded-l-xl mb-5"
      :style="{ width: progressPercentage + '%' }"
    ></div>
    <p class="text-center mb-3">
      {{ currentYear }} is already {{ progressPercentage.toFixed(6) }}%
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentDate: new Date(),
      currentYear: new Date().getFullYear(),
      progressPercentage: 0,
    };
  },

  mounted() {
    this.getPercentage();
    setInterval(() => {
      this.currentDate = new Date();
      this.getPercentage();
    }, 100);
  },

  methods: {
    getPercentage() {
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear();
      const startOfYear = new Date(currentYear, 0, 1);
      const startOfNextYear = new Date(currentYear + 1, 0, 1);
      const millisecondsPassed = currentDate - startOfYear;
      const totalMillisecondsInYear = startOfNextYear - startOfYear;
      const progressPercent =
        (millisecondsPassed / totalMillisecondsInYear) * 100;
      this.progressPercentage = progressPercent;
    },
  },
};
</script>

<style scoped>
.progress-bar .progress {
  --time: 1s;
  height: 100%;
  background-color: #00ca82;
  transform-origin: left top;
  transform: scaleX(0);
  animation: scale var(--time) forwards;
}
@keyframes scale {
  0% {
    transform: scaleX(0);
  }
  100% {
    transform: scaleX(1);
  }
}
</style>
