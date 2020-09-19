<template>
  <div class="item-videos">
    <div v-if="currentArticle">
      <h1>{{ currentArticle.title }}</h1>
      <p>{{ currentArticle.articleText }}</p>
    </div>
    <div v-else>Article is unavalible</div>
  </div>
</template>

<script>
export default {
  name: 'ItemArticles',
  computed: {
    currentArticle() {
      let currentArticleId = +this.$route.params.id;
      return this.$store.getters.getArticleById(currentArticleId);
    }
  }
}
</script>


