<template>
  <div class="articles-single page">
    <div class="container">
      <ItemArticles />
    </div>
  </div>
</template>

<script>
import ItemArticles from "@/components/ItemArticles"

export default {
  name: 'ArticleSinglePage',
  components: {
    ItemArticles
  }
}
</script>
