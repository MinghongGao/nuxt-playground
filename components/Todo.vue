<template>
  <section
    class="
      section
      is-flex is-flex-direction-column
      todo
      is-align-items-flex-start
    "
  >
    <div class="create-todo is-flex is-justify-content-space-between mb-4">
      <div class="is-flex is-align-items-center">
        New Todo: <input type="text" v-model="typedString" class="ml-4" />
      </div>
      <button @click="onCreateTodoItem" class="button is-primary">
        Create
      </button>
    </div>
    <div class="container todo-list is-flex-grow-1">
      <TodoItem
        v-for="todo in todoItems"
        :id="todo.id"
        :key="todo.id"
        :title="todo.title"
        :completed="todo.completed"
        @delete="onDeleteTodoItem"
        @toggled="onToggledTodoItem"
        @update="onTitleUpdated"
      />
    </div>
  </section>
</template>
<script>
export default {
  props: {
    todoItems: {
      type: Array,
    },
  },
  data() {
    return {
      typedString: '',
    }
  },
  methods: {
    onCreateTodoItem() {
      this.$emit('createTodo', this.typedString)
      this.typedString = ''
    },
    onDeleteTodoItem(id) {
      this.$emit('deleteTodo', id)
    },
    onToggledTodoItem(id, completed) {
      this.$emit('toggleTodo', id, completed)
    },
    onTitleUpdated(id, updatedTitle) {
      this.$emit('updateTodo', id, updatedTitle)
    },
  },
}
</script>
<style lang="scss">
.create-todo {
  width: 100%;
}
.todo {
  height: 100%;
}
.todo-list {
  overflow-y: auto;
}
</style>