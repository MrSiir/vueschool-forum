<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/logo.png" />
    <div class="container">
      <page-home />
    </div>
  </div>
</template>

<script>
import PageHome from '@/components/PageHome'

export default {
  name: 'HomeView',
  components: {
    PageHome
  }
}
</script>
