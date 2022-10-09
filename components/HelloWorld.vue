<template>
  <div>- Hello World - {{ currentDate }}</div>
</template>
<script>
export default {
  data() {
    return {
      currentDate: new Date(),
    }
  },
}
</script>
<style lang="scss" scoped>
div {
  color: red;
}
</style>