<template>
  <h1>Welcome to the Forum</h1>
  <category-list :categories="categories" />
</template>

<script>
import CategoryList from '@/components/CategoryList'
import sourceData from '@/data.json'

export default {
  components: {
    CategoryList
  },
  setup() {
    return {
      categories: sourceData.categories
    }
  }
}
</script>
