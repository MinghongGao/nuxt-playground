<template>
  <section class="section">
    <nav><Navigation :routes="routes" /></nav>
    <main><Nuxt /></main>
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
        {
          label: 'Recursive comment',
          to: '/recursive-comment',
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
</style>