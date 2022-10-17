<template>
  <div class="container is-flex is-align-items-center mb-4">
    <input
      type="checkbox"
      class="mr-2"
      :checked="completed"
      @input="onCheckboxCompletedChanged"
    />
    <p v-if="!editPhase" class="is-flex-grow-1">{{ title }}</p>

    <input
      type="text"
      class="is-flex-grow-1 mr-4"
      v-show="editPhase"
      v-model="editString"
    />

    <button class="button mr-4" @click="onEditButtonClicked" v-if="!editPhase">
      Edit
    </button>

    <button class="button mr-4" @click="onTitleUpdated" v-if="editPhase">
      Complete
    </button>
    <button
      class="button is-danger"
      @click="onCancelButtonClicked"
      v-if="editPhase"
    >
      Cancel
    </button>
    <button
      class="button is-danger"
      v-if="!editPhase"
      @click="onDeleteButtonClicked"
    >
      Delete
    </button>
  </div>
</template> 
<script>
export default {
  props: {
    title: {
      type: String,
    },
    id: {
      type: Number,
    },
    completed: {
      type: Boolean,
    },
  },
  data() {
    return { editString: '', editPhase: false }
  },
  methods: {
    onDeleteButtonClicked() {
      this.$emit('delete', this.id)
    },
    onCheckboxCompletedChanged(e) {
      this.$emit('toggled', this.id, e.target.checked)
    },
    onTitleUpdated() {
      this.$emit('update', this.id, this.editString)
    },
    onEditButtonClicked() {
      this.editString = this.title
      this.editPhase = true
    },
    onCancelButtonClicked() {
      this.editPhase = false
    },
  },
}
</script>
<style lang="">
</style>