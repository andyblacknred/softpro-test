<template>
  <div class="videos page">
    <div class="container">
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
