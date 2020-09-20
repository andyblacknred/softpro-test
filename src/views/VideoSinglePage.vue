<template>
  <div class="videos-single page">
    <div class="container">
      <ItemVideos />
    </div>
  </div>
</template>

<script>
import ItemVideos from "@/components/ItemVideos"

export default {
  name: 'VideoSinglePage',
  components: {
    ItemVideos
  }
}
</script>
