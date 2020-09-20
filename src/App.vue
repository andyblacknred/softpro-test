<template>
  <div id="app">
    <Header />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}

</script>

<style lang="sass">

body
  background-color: $white
  margin: 0
  font-family: 'Roboto', sans-serif

ul
  margin: 0
  padding: 0
  list-style-type: none

.container
  padding-left: 15px
  padding-right: 15px
  width: 100%
  max-width: 1200px
  margin-left: auto
  margin-right: auto
  box-sizing: border-box

.page
  min-height: calc(100vh - 98px)

</style>
