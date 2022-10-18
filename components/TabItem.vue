<template >
  <div
    v-show="active === true"
    class="tab"
    :class="{ active: active, inactive: !active }"
    @click="onTabClicked"
  >
    <slot />
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
    },
  },

  data() {
    return {
      active: false,
    }
  },

  methods: {
    onTabClicked() {
      this.$emit('tabClicked', this.title)
    },
  },
}
</script>
<style lang="scss">
.tab {
  cursor: pointer;
}
.active {
  background-color: lightblue;
}

.inactive {
  background-color: white;
}
</style>