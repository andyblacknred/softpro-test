<template>
  <div class="videos page">
    <div class="container">
      <h1>Відеокурс</h1>
      <ListVideos />
    </div>
  </div>
</template>

<script>
import ListVideos from "@/components/ListVideos"

export default {
  name: 'VideoListPage',
  components: {
      ListVideos
  }
}
</script>

<style lang="sass" scoped>

</style>
