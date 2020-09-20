<template>
  <div class="faq page">
    <div class="container">
      <ListFaq />
    </div>
  </div>
</template>

<script>
import ListFaq from "@/components/ListFaq"

export default {
  name: 'FaqListPage',
  components: {
    ListFaq
  }
}
</script>
