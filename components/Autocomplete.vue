<template>
  <section class="section">
    <div class="is-flex is-align-items">
      <input
        type="text"
        class="autocomplete-textbox mr-1"
        v-model="typedContent"
      />
      <button class="button is-small mr-1" @click="clear" v-if="typedContent">
        Clear
      </button>
      Result: {{ resultContent }}
    </div>

    <ul v-if="showChoices">
      <li
        v-for="choice in filteredChoices"
        :key="choice"
        @click="onChoiceClicked(choice)"
        class="list-item"
      >
        {{ choice }}
      </li>
    </ul>
  </section>
</template>
<script>
const MINIMUM_CHARACTERS = 3

export default {
  data() {
    return {
      typedContent: '',
      resultContent: '',
    }
  },
  props: {
    choices: {
      type: [String],
    },
  },
  methods: {
    onChoiceClicked(choice) {
      this.resultContent = choice
    },
    clear() {
      this.typedContent = ''
      this.resultContent = ''
    },
  },
  computed: {
    filteredChoices() {
      return this.choices.filter((choice) =>
        choice.toLowerCase().startsWith(this.typedContent.toLowerCase())
      )
    },
    showChoices() {
      return this.typedContent.length >= MINIMUM_CHARACTERS
    },
  },
}
</script>

<style lang="scss" scoped>
.list-item {
  background-color: lightgray;
  cursor: pointer;
}
</style>