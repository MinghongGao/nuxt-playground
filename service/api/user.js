import client from './client'

const listUsers = async () => {
  const users = await client.get("/users")
  return users
}


const getUser = async (userId) => {
  const user = await client.get(`/users/${userId}`)
  return user
}

export { listUsers, getUser }