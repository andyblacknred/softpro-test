<template>
  <div class="videos">
    <ListVideos />
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
