<template>
  <section class="navbar">
    <div class="navbar-brand">
      <div>
        <h1 class="title">Nuxt Playground</h1>
        <h2 class="subtitle">{{ currentDate }}</h2>
      </div>
    </div>
    <div class="navbar-menu">
      <ul class="navbar-start">
        <li class="navbar-item" v-for="route in routes" :key="route.label">
          <NuxtLink :to="route.to">{{ route.label }}</NuxtLink>
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    routes: {
      type: [Object],
    },
  },
  computed: {
    currentDate() {
      const currentDateTime = new Date()

      return `${currentDateTime.getFullYear()}-${
        currentDateTime.getMonth() + 1
      }-${currentDateTime.getDate()} ${currentDateTime.getHours()}:${currentDateTime.getMinutes()}`
    },
  },
}
</script>
<style lang="scss" scoped>
</style>
