import { mount } from '@vue/test-utils'
import Comment from '~/components/Comment.vue'

describe('Comment', () => {
  const wrapper1 = mount(Comment, {
    propsData: {
      comment: {
        id: '1',
        author: 'Author 1',
        comment: 'This is the comment 1',
        comments: [
        ],
      },
    }
  })

  const wrapper2 = mount(Comment, {
    propsData: {
      comment: {
        id: '1',
        author: 'Author 1',
        comment: 'This is the comment 1',
        comments: [
          {
            id: '2',
            author: 'Author 2',
            comment: 'This is the comment 2',
            comments: [
              {
                id: '3',
                author: 'Author 3',
                comment: 'This is the comment 3',
                comments: [],
              },
            ],
          },
        ],
      },
    }
  })

  test('renders author, comment (no sub-comments)', () => {
    expect(wrapper1.find(".author").text()).toContain("Author 1")
    expect(wrapper1.find(".comment").text()).toContain("This is the comment 1")
  })

  test('renders author, comment (with sub-comments)', async () => {
    expect(wrapper2.find("#author-1").exists()).toBe(true)
    expect(wrapper2.find("#author-1").text()).toContain("Author 1")

    expect(wrapper2.find("#author-2").exists()).toBe(false)

    const toggleButton = wrapper2.find("#toggle-button-1")
    expect(toggleButton.exists()).toBe(true)

    await toggleButton.trigger("click")
    expect(wrapper2.find("#author-2").exists()).toBe(true)
    expect(wrapper2.find("#author-2").text()).toContain("Author 2")
  })
})
