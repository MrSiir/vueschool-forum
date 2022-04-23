<template>
  <div class="col-large push-top">
    <h1>{{ thread.title }}</h1>
    <post-list :posts="threadPosts" />
    <post-editor @save="addPost" />
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import sourceData from '@/data.json'
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
    const threads = sourceData.threads
    const posts = ref(sourceData.posts)

    const thread = computed(() => threads.find((t) => t.id === props.id))

    const threadPosts = computed(() =>
      posts.value.filter((p) => p.threadId === props.id)
    )

    const addPost = (eventData) => {
      const post = {
        ...eventData.post,
        threadId: props.id
      }
      posts.value.push(post)
      thread.value.posts.push(post.id)
    }

    return {
      thread,
      threads,
      threadPosts,
      addPost
    }
  }
}
</script>
