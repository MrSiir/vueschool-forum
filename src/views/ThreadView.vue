<template>
  <div class="home">
    <div class="container">
      <page-thread :id="threadId" />
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import PageThread from '@/components/PageThread'

export default {
  name: 'ThreadView',
  components: {
    PageThread
  },
  setup() {
    const route = useRoute()
    const threadId = route.params.id

    return {
      threadId
    }
  }
}
</script>
