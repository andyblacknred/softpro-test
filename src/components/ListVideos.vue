<template>
  <ul class="list-videos">
    <li v-for="( item, index ) in listVideos" :key="index">
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

<style lang="sass" scoped>
.list-videos
  background-color: #fff
</style>


