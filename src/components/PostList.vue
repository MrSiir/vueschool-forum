<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.id" class="post">
      <div class="user-info">
        <a href="#" class="user-name">{{ userById(post.userId).name }}</a>
        <a href="#">
          <img class="avatar-large" :src="userById(post.userId).avatar" />
        </a>
        <a class="desktop-only text-small">107 posts</a>
      </div>
      <div class="post-content">
        <div>
          <p>{{ post.text }}</p>
        </div>
      </div>
      <div class="post-date text-faded">
        <app-date :timestamp="post.publishedAt" />
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'

export default {
  props: {
    posts: {
      required: true,
      type: Array
    }
  },
  setup() {
    const { state } = useStore()

    const userById = (userId) => state.users.find((u) => u.id === userId)

    return {
      userById
    }
  }
}
</script>
