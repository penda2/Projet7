<template>
  <div id="posts-container">
    <h3>All posts</h3>
    <div class="posts-group" v-for="post in posts" :key="post.id">
      <P>title: {{post.title}}</P>
      <p>body: {{post.postBody}}</p>
      <span>date: {{post.createdDate}}</span>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: "PostList",
  computed: {
      ...mapState([
          'posts'
      ])
  },
    created() {
      this.$store.dispatch('getAllPosts')
  }
};
</script>

<style>
</style>