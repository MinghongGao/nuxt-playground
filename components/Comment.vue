<template>
  <div>
    <p class="is-size-7 has-text-weight-bold">{{ comment.author }}</p>
    <p class="is-size- has-text-weight-light">{{ comment.comment }}</p>
    <div class="pl-6">
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
}
</script>