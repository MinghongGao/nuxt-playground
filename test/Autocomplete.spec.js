import { mount } from "@vue/test-utils"
import Autocomplete from '~/components/Autocomplete.vue'

describe("Autocomplete component", () => {
  const wrapper = mount(Autocomplete, {
    propsData: {
      value: "",
      choices: ["abc", "abcd", "abcde"]
    }
  })

  it("is a Vue instance", async () => {
    expect(wrapper.vm).toBeTruthy()
  })

  it("doesn't display clear button initially(when the user doesn't type word larger or equal to 3 chars)", () => {
    expect(wrapper.find(".clear-button").exists()).toBe(false)
  })

  it("does display clear button initially(when the user typed word larger or equal to 3 chars)", async () => {
    await wrapper.setProps({
      value: "abc",
    })
    expect(wrapper.find(".autocomplete-textbox").element.value).toBe("abc")
    expect(wrapper.find(".clear-button").exists()).toBe(true)
  })
})