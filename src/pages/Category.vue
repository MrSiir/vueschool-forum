<template>
  <h1>{{ category.name }}</h1>
  <forum-list :title="category.name" :forums="getForumsForCategory(category)" />
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import ForumList from '@/components/ForumList'

export default {
  components: {
    ForumList
  },
  props: {
    id: {
      required: true,
      type: String
    }
  },
  setup(props) {
    const { state } = useStore()

    const category = computed(() =>
      state.categories.find((c) => c.id === props.id)
    )

    const getForumsForCategory = (category) =>
      state.forums.filter((f) => f.categoryId === category.id)

    return {
      category,
      getForumsForCategory
    }
  }
}
</script>
