import { createStore } from 'vuex'
import sourceData from '@/data.json'

export default createStore({
  state: sourceData,
  getters: {},
  mutations: {
    setPost(state, { post }) {
      state.posts.push(post)
    },
    appendPostToThread(state, { postId, threadId }) {
      const thread = state.threads.find((t) => t.id === threadId)
      thread.posts.push(postId)
    }
  },
  actions: {
    createPost(context, post) {
      post.id = 'xxxxx' + Math.random()
      context.commit('setPost', { post })
      context.commit('appendPostToThread', {
        postId: post.id,
        threadId: post.threadId
      })
    }
  },
  modules: {}
})
