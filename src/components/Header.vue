<template>
  <div class="category-list">
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
</template>

<script>
export default {
  name: 'Header'
}
</script>
