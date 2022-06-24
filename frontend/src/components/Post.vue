<template>
  <form @submit.prevent= "createPost" id="form-group">
   <h1>Create post</h1>
    <div class="form-ctrl">
      <label>Title</label>
      <input type="text" class="input-focus" v-model="title"/>
    </div>
    <div class="form-ctrl">
      <label>Post</label>
      <input type="textarea" class="input-focus postBody" v-model="post"/>
    </div>
    <div class="form-ctrl">
      <label for="file">Add image</label>
      <input type="file" class="loadImg"/>
    </div>

    <div class="form-ctrl">
      <input type="submit" class="btn-connect" value="Submit" />
    </div>
  </form>
</template>

<script>
import axios from "axios";

export default {
  name: "Post",
  data() {
    return {
      userId: "",
      title: "",
      post: "",
      image: "",
      }
  },
  methods: {
    createPost() {
      const userPost = {
        userId: this.userId,
        title: this.title,
        post: this.post,
        image: this.image
      };
      axios
        .post("/auth/post", userPost)
        .then((response) => {
          console.log(response.data);
          this.$router.push('/')

        }).catch(error => {
          console.log(error);
        })
    },
  },
};
</script>

<style>
</style>
