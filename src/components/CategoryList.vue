<template>
  <forum-list
    v-for="category in categories"
    :key="category"
    :forums="getForumsForCategory(category)"
    :title="category.name"
    :category-id="category.id"
  />
</template>

<script>
import sourceData from '@/data.json'
import ForumList from '@/components/ForumList.vue'

export default {
  components: { ForumList },
  props: {
    categories: {
      required: true,
      type: Array
    }
  },
  setup() {
    const getForumsForCategory = (category) =>
      sourceData.forums.filter((f) => f.categoryId === category.id)

    return {
      getForumsForCategory
    }
  }
}
</script>
