<template>
  <div id="pageProfile">
    <div class="infoprofile">
      <div class="profileLinks">
        <ul>
          <li>
            <router-link to="/Post">Create post</router-link>
            </li>
            <li>
              <router-link to="/">Edit profile</router-link>
            </li>
        </ul>
      </div>
      <div class="profile">
        <div class="imgProfile">
        <img src="" alt="" >
        </div>
        <p class="name">Name</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Posts",
  data() {
    return {
      posts: [],
    }
  },
  methods: {
    getAllPosts() {
      const userPost = {
        userId: this.userId,
        title: this.title,
        post: this.post
      };
      axios
        .post("/auth/posts", userPost)
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
