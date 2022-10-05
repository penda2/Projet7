<template>
  <form @submit.prevent="updatePost" class="form-group">
    <h1>Modifier post {{ $route.params.id }}</h1>
    <div class="form-ctrl">
      <label>Title</label>
      <input type="text" class="input-focus" v-model="title" />
    </div>
    <div class="form-ctrl">
      <label>Post</label>
      <input type="textarea" class="input-focus postBody" v-model="post" />
    </div>
    <div class="form-ctrl">
      <label for="file">Ajouter une image</label>
      <input type="file" accept="images/*" ref="file" @change="change" class="loadImg"/>
    </div>
    <div class="form-ctrl">
      <input type="submit" class="btn-connect" value="Update" />
    </div>
  </form>
</template>

<script>
import axios from "axios";
export default {
  name: "UpdatePost",
  data() {
    return {
      title: "",
      post: "",
      file: "",
    };
  },
  methods: {
    change() {
      this.file = this.$refs.file.files[0];
    },
    updatePost() {
      const formData = new FormData();
      formData.append('file', this.file);
      formData.append('title', this.title);
      formData.append('post', this.post);
      axios
        .put("/posts/" + this.$route.params.id, formData, {
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
  mounted() {
    axios
      .get("/posts/" + this.$route.params.id)
      .then((response) => {
        console.log("update res.data", response.data);
        const data = response.data.results[0];
        console.log("data update:");
        console.log(data);
        this.title = data.title;
        this.post = data.postBody;
        this.file = data.file;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>