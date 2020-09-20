<template>
  <div class="item-videos">
    <div v-if="currentVideo">
      <h1>{{ currentVideo.title }}</h1>
      <div v-if="currentVideo.videoFormat === 'youtube'">
        <iframe width="560" height="315" :src="currentVideo.videoUrl" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div v-else-if="currentVideo.videoFormat === 'mp4'">
        <video controls>
          <source :src="currentVideo.videoUrl" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
      <div v-else>
        Video has unknown format
      </div>
    </div>
    <div v-else>Video is unavalible</div>
  </div>
</template>

<script>
export default {
  name: 'ItemVideos',
  computed: {
    currentVideo() {
      let currentVideoId = +this.$route.params.id;
      return this.$store.getters.getVideoById(currentVideoId);
    }
  }
}
</script>

<style lang="sass" scoped>
iframe,
video
  width: 100%
</style>


