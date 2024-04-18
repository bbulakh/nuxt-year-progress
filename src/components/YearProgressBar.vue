<template>
  <div class="progress-bar">
    <div class="progress" :style="{ width: progressPercentage + '%' }">
      {{ progressPercentage.toFixed(5) }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      progressPercentage: 10,
    };
  },

  mounted() {
    this.getPercentage();
    setInterval(this.getPercentage, 5000);
  },

  methods: {
    getPercentage() {
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear();
      const startOfYear = new Date(currentYear, 0, 1);
      const startOfNextYear = new Date(currentYear + 1, 0, 1);
      const millisecondsPassed = currentDate - startOfYear;
      const totalMillisecondsInYear = startOfNextYear - startOfYear;
      const progressPercent = (millisecondsPassed / totalMillisecondsInYear) * 100;
      this.progressPercentage = progressPercent;
    },
  },
};
</script>

<style scoped>
.progress-bar {
  width: 100%;
  height: 20px;
  background-color: #f3f3f3;
  border-radius: 5px;
}

.progress {
  height: 100%;
  background-color: #4caf50;
  border-radius: 5px;
}
</style>
