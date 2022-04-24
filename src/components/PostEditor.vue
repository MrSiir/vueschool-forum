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
import { useStore } from 'vuex'

export default {
  name: 'PostEditor',
  emits: ['save'],
  setup(props, { emit }) {
    const { state } = useStore()

    const threads = ref(state.threads)
    const posts = ref(state.posts)

    const thread = computed(() => threads.value.find((t) => t.id === props.id))

    const threadPosts = computed(() =>
      posts.value.filter((p) => p.threadId === props.id)
    )

    const text = ref('')

    const save = () => {
      const post = {
        text: text.value,
        publishedAt: Math.floor(Date.now() / 1000),
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
