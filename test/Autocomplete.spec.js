const { mount } = require("@vue/test-utils")
const Autocomplete = require("~/components/Autocomplete")

describe("Autocomplete component", () => {
  const wrapper = mount(Autocomplete)

  it("is a Vue instance", () => {
    expect(wrapper.vm).toBeTruthy()
  })

  it("doesn't display clear button initially(when the user doesn't type word larger or equal to 3 chars)", () => {
    expect(wrapper.find(".clear-button").exists()).toBe(false)
  })

  it("does display clear button initially(when the user typed word larger or equal to 3 chars)", async () => {
    await wrapper.setData({
      typedContent: "maximum"
    })
    await wrapper.vm.$nextTick()
    expect(wrapper.find(".autocomplete-textbox").text()).toBe("maximum")
    expect(wrapper.find(".clear-button").exists()).toBe(true)
  })
})