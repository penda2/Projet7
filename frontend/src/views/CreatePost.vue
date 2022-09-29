<template>
  <form
    @submit.prevent="createPost"
    enctype="multipart/form-data"
    class="form-group">
    <h1>Create post</h1>
    <div class="form-ctrl">
      <label>Titre</label>
      <input type="text" class="input-focus" v-model="title"/>
    </div>
    <div class="form-ctrl">
      <label>Post</label>
      <input type="textarea" class="input-focus postBody" v-model="post"/>
    </div>
    <div class="form-ctrl">
      <input
        type="file" accept="images/*" ref="file" @change="change" class="loadImg"/>
    </div>
    <div class="form-ctrl">
      <input type="submit" class="btn-connect" value="Valider" />
    </div>
  </form>
</template>

<script>
import axios from "axios";
export default {
  name: "CreatePost",
  data() {
    return {
      userId: "",
      title: "",
      post: "",
      file: "",
    };
  },
  methods: {
    change() {
      this.file = this.$refs.file.files[0];
    },
    createPost() {
      const formData = new FormData();
      formData.append('file', this.file);
      formData.append('title', this.title);
      formData.append('post', this.post);
      axios
        .post("/posts/", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then((response) => {
          console.log(response.data);
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>