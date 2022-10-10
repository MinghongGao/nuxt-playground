<template>
  <div>
    <div class="is-flex is-justify-content-space-between is-align-items-center">
      <div class="author-and-comment">
        <p
          class="is-size-7 has-text-weight-bold author"
          :id="`author-${comment.id}`"
        >
          {{ comment.author }}
        </p>
        <p
          class="is-size-4 has-text-weight-light comment"
          :id="`comment-${comment.id}`"
        >
          {{ comment.comment }}
        </p>
      </div>
      <div class="toggle-subcomments-button" v-if="comment.comments.length > 0">
        <button
          @click="toggleSubComments"
          class="button toggle-comments-button"
          :id="`toggle-button-${comment.id}`"
        >
          {{ showComments ? 'Hide' : 'Show' }} Sub-Comments
        </button>
      </div>
    </div>

    <div
      class="pl-6 sub-comments"
      v-if="showComments"
      :id="`subcomments-${comment.id}`"
    >
      <Comment
        v-for="comment in comment.comments"
        :key="comment.id"
        :comment="comment"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: 'comment',
  props: {
    comment: {
      type: Object,
    },
  },
  data() {
    return {
      showComments: false,
    }
  },
  methods: {
    toggleSubComments() {
      this.showComments = !this.showComments
    },
  },
}
</script>