<template>
  <div class="container is-flex is-flex-direction-column">
    <ul class="tabs-list is-flex">
      <li v-for="tabItem in tabItems" :key="tabItem" class="mr-4 tab-item">
        {{ tabItem }}
      </li>
    </ul>

    <div class="tab-content"><slot></slot></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentTabIndex: 0,
      tabItems: [],
    }
  },
  created() {
    this.tabItems = this.$slots.default.map((tabItem) => {
      console.log(tabItem)
      return tabItem.title
    })
  },
  methods: {
    onTabClicked(tabItem) {
      this.currentActiveTabItem = tabItem
    },
  },
}
</script>
<style lang="scss">
.tabs-list {
  & > div {
    margin-right: 10px;
  }
}
.tab-item {
  cursor: pointer;
}
</style>