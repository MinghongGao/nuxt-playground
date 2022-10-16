<template>
  <section class="section">
    <h1 class="title">Autocomplete</h1>
    <div class="box">
      <Autocomplete v-model="typedString" :choices="choices" />
    </div>
  </section>
</template>
<script>
import { listUsers } from '~/service/api/user'
export default {
  data() {
    return {
      typedString: '',
      choices: [],
    }
  },

  async created() {
    const users = await listUsers()
    this.choices = users.map((user) => user.name)
  },
}
</script>