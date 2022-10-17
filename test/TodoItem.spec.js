import { mount } from '@vue/test-utils'
import TodoItem from '~/components/TodoItem'

describe("TodoItem", () => {
  const propsData = {
    title: "This is the title",
    completed: false,
    id: 1
  }
  const alteredPropsData = {
    title: "This is the altered title",
    completed: true,
    id: 2
  }

  it("renders correctly", () => {
    const wrapper = mount(TodoItem, {
      propsData
    })

    expect(wrapper.vm).toBeTruthy()
  })

  it("render title, completed correctly", async () => {
    const wrapper = mount(TodoItem, {
      propsData
    })

    expect(wrapper.find(".todo-item-title").element.innerHTML).toBe(propsData.title)
    expect(wrapper.find(".todo-item-checkbox").element.checked).toBe(propsData.completed)

    await wrapper.setProps(alteredPropsData)
    expect(wrapper.find(".todo-item-title").element.innerHTML).toBe(alteredPropsData.title)
    expect(wrapper.find(".todo-item-checkbox").element.checked).toBe(alteredPropsData.completed)



  })

  it("emits delete signal whenover the delete button is clicked", async () => {
    const wrapper = mount(TodoItem, {
      propsData
    })

    const deleteButtonWrapper = wrapper.find(".todo-item-delete-button")
    expect(deleteButtonWrapper.exists()).toBe(true)

    await deleteButtonWrapper.trigger("click")
    expect(wrapper.emitted().delete).toBeTruthy()
    expect(wrapper.emitted().delete[0]).toEqual([propsData.id])

  })


})