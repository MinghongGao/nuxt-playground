<template>
  <section class="section whole is-flex is-flex-direction-column">
    <nav><Navigation :routes="routes" /></nav>
    <main class="is-flex-grow-1"><Nuxt /></main>
  </section>
</template>
<script>
export default {
  data() {
    return {
      routes: [
        {
          label: 'Home',
          to: '/',
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
.whole {
  height: 100vh;
}
main {
  overflow-y: auto;
}
</style>