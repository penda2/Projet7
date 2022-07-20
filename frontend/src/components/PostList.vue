<template>
  <div id="posts-container">
    <h3>All posts</h3>
    <div class="posts-group" v-for="post in posts" :key="post.id">
      <P>title: {{post.title}}</P>
      <p>body: {{post.postBody}}</p>
      <span>date: {{post.createdDate}}</span>
      <div class="postActions">
        <div class="commentBloc">
          <input type="text" class="input-comment"/>
          <input type="submit" class="btn-comment" value="Comment" />
        </div>
        <div class="likes">
          <p>Like</p>
          <p>Dislike</p>
        </div>
      </div>
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