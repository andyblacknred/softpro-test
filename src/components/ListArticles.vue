<template>
  <ul class="list-articles content-list">
    <li class="content-list-item" v-for="( item, index ) in listArticles" :key="index">
      <router-link
          :to="'/articles/'+item.id"
      >
        {{ item.title }}
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'ListArticles',
  computed: {
    listArticles() {
      return this.$store.getters.getListArticles;
    }
  }
}
</script>


