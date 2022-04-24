<template>
  <div class="col-full push-top">
    <div class="forum-header">
      <div class="forum-details">
        <h1>{{ forum.name }}</h1>
        <p class="text-lead">{{ forum.description }}</p>
      </div>
      <a href="#" class="btn-green btn-small">Start a thread</a>
    </div>
  </div>
  <div class="col-full push-top">
    <thread-list :threads="threads" />
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import ThreadList from '@/components/ThreadList'

export default {
  components: {
    ThreadList
  },
  props: {
    id: {
      required: true,
      type: String
    }
  },
  setup(props) {
    const { state } = useStore()

    const threads = computed(() =>
      state.threads.filter((t) => t.forumId === props.id)
    )

    const forum = computed(() => state.forums.find((f) => f.id === props.id))

    return {
      forum,
      threads
    }
  }
}
</script>
