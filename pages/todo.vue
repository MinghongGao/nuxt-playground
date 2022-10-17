<template>
  <section class="section todo">
    <Todo
      v-if="!loading"
      :todoItems="todoItems"
      @createTodo="createTodo"
      @deleteTodo="deleteTodo"
      @toggleTodo="toggleTodo"
      @updateTodo="updateTodo"
    />
    <div class="loader" v-if="loading"></div>
  </section>
</template>
<script>
import {
  listTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} from '~/service/api/todo'
export default {
  data() {
    return {
      todoItems: ['Get up from the bed', 'Brush the teeth', 'do the work'],
      loading: true,
    }
  },
  async created() {
    const todos = await listTodos()
    this.todoItems = todos
    this.loading = false
  },
  methods: {
    async createTodo(title) {
      this.loading = true
      const newTodoWaitingtoBeCreated = {
        title: title,
        userId: 1,
        completed: false,
      }
      const newTodo = await createTodo(newTodoWaitingtoBeCreated)
      console.log(newTodo)
      this.todoItems = await listTodos()
      this.loading = false
    },
    async deleteTodo(id) {
      this.loading = true
      await deleteTodo(id)
      this.todoItems = await listTodos()
      this.loading = false
    },
    async toggleTodo(id, completed) {
      this.loading = true
      const newTodoWaitingtoBeUpdated = {
        userId: 1,
        completed: completed,
      }
      const updatedTodo = await updateTodo(id, newTodoWaitingtoBeUpdated)
      console.log(updatedTodo)
      this.todoItems = await listTodos()
      this.loading = false
    },

    async updateTodo(id, updatedTitle) {
      this.loading = true
      const newTodoWaitingtoBeUpdated = {
        userId: 1,
        title: updatedTitle,
      }
      const updatedTodo = await updateTodo(id, newTodoWaitingtoBeUpdated)
      console.log(updatedTodo)
      this.todoItems = await listTodos()
      this.loading = false
    },
  },
}
</script>
<style lang="scss" scoped>
</style>