<template>
  <div class="col-full">
    <form @submit.prevent="save">
      <div class="form-group">
        <textarea v-model="text" cols="30" rows="10" class="form-input" />
      </div>
      <div class="form-actions">
        <button class="btn btn-blue">Publish</button>
      </div>
    </form>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import sourceData from '@/data.json'

export default {
  name: 'PostEditor',
  emits: ['save'],
  setup(props, { emit }) {
    const threads = sourceData.threads
    const posts = ref(sourceData.posts)

    const thread = computed(() => threads.find((t) => t.id === props.id))

    const threadPosts = computed(() =>
      posts.value.filter((p) => p.threadId === props.id)
    )

    const text = ref('')

    const save = () => {
      const post = {
        id: 'xxxxx' + Math.random(),
        text: text.value,
        publishedAd: Math.floor(Date.now() / 1000),
        userId: 'rpbB8C6ifrYmNDufMERWfQUoa202'
      }

      emit('save', { post })

      text.value = ''
    }

    return {
      thread,
      threads,
      threadPosts,
      text,
      save
    }
  }
}
</script>
