<template>
  <div id="posts-container">
    <PostOne/>
  </div>
</template>

<script>
import PostOne from "./PostOne.vue";
export default {
  name: "PostList",
  components: {
    PostOne
  }
};
</script>