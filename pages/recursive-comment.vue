<template>
  <section class="section">
    <h1 class="title">Recursive Comments</h1>
    <div class="box">
      <Comment
        v-for="comment in comments"
        :key="comment.id"
        :comment="comment"
      />
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      comments: [
        {
          id: '1',
          author: 'Author 1',
          comment: 'This is the comment',
          comments: [],
        },
        {
          id: '2',
          author: 'Author 2',
          comment: 'This is the comment',
          comments: [
            {
              id: '3',
              author: 'Author 3',
              comment: 'This is the comment',
              comments: [
                {
                  id: '4',
                  author: 'Author 4',
                  comment: 'This is the comment',
                  comments: [],
                },
              ],
            },
          ],
        },
      ],
    }
  },
}
</script>