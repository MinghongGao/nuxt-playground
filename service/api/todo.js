import client from './client'

const listTodos = async () => {
  const todos = client.get("/todos")
  return todos ?? []
}
const createTodo = async (todo) => {
  const persistedTodoItem = await client.post("/todos", todo)
  return persistedTodoItem?.data
}

const updateTodo = async (id, todo) => {
  const persistedTodoItem = await client.put(`/todos/${id}`, todo)
  return persistedTodoItem?.data
}

const deleteTodo = async (id) => {
  await client.delete(`/todos/${id}`)
}


export { listTodos, createTodo, updateTodo, deleteTodo }