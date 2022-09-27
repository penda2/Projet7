<template>
  <div id="posts-container">
    <PostContent />
  </div>
</template>

<script>
import PostContent from "./PostContent.vue";
export default {
  name: "PostList",
  components: {
    PostContent,
  },
};
</script>