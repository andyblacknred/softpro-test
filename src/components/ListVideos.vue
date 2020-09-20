<template>
  <ul class="list-videos content-list">
    <li class="content-list-item" v-for="( item, index ) in listVideos" :key="index">
      <router-link
          :to="'/videos/'+item.id"
      >
        {{ item.title }}
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'ListVideos',
  computed: {
    listVideos() {
      return this.$store.getters.getListVideos;
    }
  }
}
</script>


