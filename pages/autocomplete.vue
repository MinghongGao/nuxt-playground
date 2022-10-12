<template>
  <section class="section">
    <h1 class="title">Autocomplete</h1>
    <div class="box">
      <Autocomplete :choices="choices" />
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      choices: [
        'justice',
        'maximum',
        'ethnic',
        'auditor',
        'problem',
        'bring',
        'hall',
        'fill',
        'inflate',
        'dialogue',
        'umbrella',
        'trap',
        'ignore',
        'source',
        'formation',
        'thinker',
        'contrary',
        'blast',
        'overlook',
        'berry',
        'drawing',
        'elephant',
        'royalty',
        'brave',
        'progressive',
        'pottery',
        'line',
        'plead',
        'bank',
        'financial',
        'nuclear',
        'trivial',
        'amputate',
        'volume',
        'context',
        'distort',
        'distinct',
        'carry',
        'outfit',
        'goat',
        'estimate',
        'share',
        'law',
        'heart',
        'cheat',
        'write',
        'party',
        'landowner',
        'loan',
        'demonstrate',
      ],
    }
  },
}
</script>