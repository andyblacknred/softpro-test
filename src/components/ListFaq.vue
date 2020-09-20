<template>
  <div class="list-faq content-list" v-if="true">
    <ItemFaq v-for="(item, index) of listFaq" :faqItem="item" :key="index" />
  </div>
</template>

<script>
import ItemFaq from "@/components/ItemFaq"

export default {
  name: 'ListFaq',
  components: {
    ItemFaq
  },
  computed: {
    listFaq() {
      return this.$store.getters.getListFaq.map(item => {
        item.isOpened = false
        return item
      })
    }
  }
}
</script>


