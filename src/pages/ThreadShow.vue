<template>
  <div class="col-large push-top">
    <h1>{{ thread.title }}</h1>
    <post-list :posts="threadPosts" />
    <post-editor @save="addPost" />
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import PostList from '@/components/PostList'
import PostEditor from '@/components/PostEditor'

export default {
  name: 'ThreadShow',
  components: {
    PostList,
    PostEditor
  },
  props: {
    id: {
      required: true,
      type: String
    }
  },
  setup(props) {
    const { state, dispatch } = useStore()

    const thread = computed(() => state.threads.find((t) => t.id === props.id))

    const threadPosts = computed(() =>
      state.posts.filter((p) => p.threadId === props.id)
    )

    const addPost = (eventData) => {
      const post = {
        ...eventData.post,
        threadId: props.id
      }
      dispatch('createPost', post)
    }

    return {
      thread,
      threadPosts,
      addPost
    }
  }
}
</script>
