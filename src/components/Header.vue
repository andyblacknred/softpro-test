<template>
  <div class="header">
    <div class="container">
      <div class="nav" :class="{ opened: isMobileMenuOpened }" @click="closeMobileMenu">
        <router-link
            class="category-item"
            to="/"
        >
          Головна
        </router-link>
        <router-link
            class="category-item"
            to="/videos"
        >
          Відеокурс
        </router-link>
        <router-link
            class="category-item"
            to="/faq"
        >
          Питання та відповіді
        </router-link>
        <router-link
            class="category-item"
            to="/articles"
        >
          Статті
        </router-link>
      </div>
      <div class="mobile-nav">
        <div class="burger-btn" :class="{ opened: isMobileMenuOpened }" @click="toggleMobileMenu">
          <span></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      isMobileMenuOpened: false
    }
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpened = !this.isMobileMenuOpened;
    },
    closeMobileMenu() {
      this.isMobileMenuOpened = false;
    }
  }
}
</script>

<style lang="sass" scoped>

.header
  background-color: $primary
  color: $white
  .nav
    display: flex
    flex-wrap: wrap
    @media all and (max-width: $mobile)
      position: absolute
      left: 0
      top: 0
      bottom: 0
      right: 0
      background-color: $primary
      flex-direction: column
      align-items: center
      justify-content: center
      transform: translateX(-100%)
      transition: transform .5s
      z-index: 1
      &.opened
        transform: translateX(0)
        transition: transform .5s
    a
      color: $white
      text-decoration: none
      text-transform: uppercase
      padding: 15px
      display: block
      font-size: 24px
  .mobile-nav
    display: none
    @media all and (max-width: $mobile)
      display: block
    .burger-btn
      width: 30px
      padding: 15px
      position: relative
      margin-left: auto
      z-index: 2
      &::before,
      &::after,
      span
        content: ''
        display: block
        width: 100%
        height: 3px
        background-color: $white
        margin-bottom: 5px
        transition: .5s
      &::after
        margin-bottom: 0
      &.opened
        &::before
          transform: rotate(45deg)
          margin-top: 10px
          margin-bottom: -2px
          transition: .5s
        span
          transform: rotate(-45deg)
          transition: .5s
        &::after
          display: none

</style>
