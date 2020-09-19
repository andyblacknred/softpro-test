<template>
  <div class="item-faq">
    <h2>{{ faqItem.title }}</h2>
    <h3 @click="changeVisibility(faqItem)">{{ faqItem.questionText }}</h3>
    <p v-if="faqItem.isOpened">{{ faqItem.answerText }}</p>
  </div>
</template>

<script>
export default {
  name: 'ItemFaq',
  props: {
    faqItem: Object
  },
  methods: {
    changeVisibility: (item) => {
      item.isOpened = !item.isOpened
    }
  },
}
</script>


