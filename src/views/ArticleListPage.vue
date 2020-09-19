<template>
  <div class="articles">
    <ListArticles />
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
