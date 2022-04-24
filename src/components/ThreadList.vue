<template>
  <div class="col-full">
    <div class="thread-list">
      <div class="list-title">Threads</div>
      <div v-for="thread in threads" :key="thread.id" class="thread">
        <div>
          <p>
            <router-link :to="{ name: 'Thread', params: { id: thread.id } }">{{
              thread.title
            }}</router-link>
          </p>
          <p class="text-faded text-xsmall">
            By <a href="#">{{ userById(thread.userId).name }}</a
            >, <app-date :timestamp="thread.publishedAt" />
          </p>
        </div>
        <div class="activity">
          <p class="replies-count">{{ thread.posts.length }}</p>

          <img class="avatar-medium" :src="userById(thread.userId).avatar" />

          <div>
            <p class="text-small">
              <a href="#">{{ userById(thread.userId).name }}</a>
            </p>
            <p class="text-xsmall text-faded">
              <app-date :timestamp="thread.publishedAt" />
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sourceData from '@/data.json'

export default {
  props: {
    threads: {
      type: Array,
      required: true
    }
  },
  setup() {
    const posts = sourceData.posts
    const users = sourceData.users

    const postById = (postId) => posts.find((p) => p.id === postId)

    const userById = (userId) => users.find((u) => u.id === userId)

    return {
      postById,
      userById
    }
  }
}
</script>
