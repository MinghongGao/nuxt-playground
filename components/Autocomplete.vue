<template>
  <section class="section">
    <div class="is-flex is-align-items">
      <input
        type="text"
        class="autocomplete-textbox mr-1"
        :value="typedContent"
        @input="inputChanged"
      />
      <button
        class="button is-small mr-1 clear-button"
        @click="clear"
        v-if="typedContent"
      >
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
      typedContent: this.value ?? '',
      resultContent: '',
    }
  },
  props: {
    value: {
      type: String,
      optional: false,
    },
    choices: {
      type: Array,
    },
  },
  watch: {
    value: {
      handler(newValue) {
        this.typedContent = newValue
      },
      immediate: true,
    },
  },
  methods: {
    inputChanged(newInput) {
      this.typedContent = newInput.target.value
      this.$emit('input', newInput.target.value)
    },
    onChoiceClicked(choice) {
      this.resultContent = choice
      this.typedContent = choice
      this.$emit('input', choice)
    },
    clear() {
      this.typedContent = ''
      this.resultContent = ''
    },
  },
  created() {
    console.log(this.value)
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