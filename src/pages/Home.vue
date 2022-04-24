<template>
  <h1 class="push-top">Welcome to the Forum</h1>
  <category-list :categories="categories" />
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import CategoryList from '@/components/CategoryList'

export default {
  components: {
    CategoryList
  },
  setup() {
    const { state } = useStore()

    const categories = computed(() => state.categories)

    return {
      categories
    }
  }
}
</script>
