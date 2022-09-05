<template>
  <form @submit.prevent="updatePost" id="form-group">
    <h1>Update post {{ $route.params.id }}</h1>
    <div class="form-ctrl">
      <label>Title</label>
      <input type="text" class="input-focus" v-model="title" />
    </div>
    <div class="form-ctrl">
      <label>Post</label>
      <input type="textarea" class="input-focus postBody" v-model="post" />
    </div>
    <div class="form-ctrl">
      <label for="file">Add image</label>
      <input type="file" class="loadImg" />
    </div>
    <div class="form-ctrl">
      <input type="submit" class="btn-connect" value="Update" />
    </div>
  </form>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
export default {
  name: "UpdatePost",
  data() {
    return {
      title: "",
      post: "",
      image: "",
    };
  },
  methods: {
    updatePost() {
      const userPostUpdate = {
        title: this.title,
        post: this.post,
        image: this.image,
      };
      axios
        .put("/posts/" + this.$route.params.id, userPostUpdate)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    axios
      .get("/posts/" + this.$route.params.id)
      .then((response) => {
        const data = response.data.results[0];
        this.title = data.title;
        this.post = data.postBody;
        this.image = data.image;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>