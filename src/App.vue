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

h1
  font-size: 60px
  font-weight: 700
  @media all and (max-width: $mobile)
    font-size: 36px

h2
  font-size: 48px
  font-weight: 700
  @media all and (max-width: $mobile)
    font-size: 28px

h3
  font-size: 36px
  font-weight: 700
  @media all and (max-width: $mobile)
    font-size: 24px

.container
  padding-left: 15px
  padding-right: 15px
  width: 100%
  max-width: 1200px
  margin-left: auto
  margin-right: auto
  box-sizing: border-box

.page
  min-height: calc(100vh - 148px)
  padding: 25px 0
  background-color: $grey

.content-list
  box-shadow: 0px 0px 30px -15px rgba(0,0,0,0.75)
  padding: 15px
  background-color: $white

.content-list-item
  &::after
    content: ""
    display: block
    width: 100%
    height: 1px
    background-color: $black
    margin-top: 15px
    margin-bottom: 15px
  &:last-child
    &::after
      display: none
  a
    font-size: 24px
    text-decoration: none
    color: $black
    display: block

</style>
