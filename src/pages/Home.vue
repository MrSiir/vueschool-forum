<template>
  <h1>Welcome to the Forum</h1>
  <thread-list :threads="threads" />
</template>

<script>
import ThreadList from '@/components/ThreadList'
import sourceData from '@/data.json'

export default {
  components: {
    ThreadList
  },
  setup() {
    const threads = sourceData.threads

    return {
      threads
    }
  }
}
</script>
