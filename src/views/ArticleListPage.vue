<template>
  <div class="articles page">
    <div class="container">
      <h1>Статті</h1>
      <ListArticles />
    </div>
  </div>
</template>

<script>
import ListArticles from "@/components/ListArticles"

export default {
  name: 'ArticleListPage',
  components: {
    ListArticles
  }
}
</script>
