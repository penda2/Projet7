<template>
  <form
    @submit.prevent="createPost"
    enctype="multipart/form-data"
    class="form-group"
  >
    <h1>Create post</h1>
    <div class="form-ctrl">
      <label>Titre</label>
      <input type="text" class="input-focus" v-model="title" />
    </div>
    <div class="form-ctrl">
      <label>Post</label>
      <input type="textarea" class="input-focus postBody" v-model="post" />
    </div>
    <div class="form-ctrl">
      <input
        type="file"
        accept="images/*"
        ref="image"
        @change="change"
        class="loadImg"
      />
    </div>
    <div class="form-ctrl">
      <input type="submit" class="btn-connect" value="Valider" />
    </div>
  </form>
</template>

<script>
import axios from "axios";
export default {
  components: {
  },
  name: "CreatePost",
  data() {
    return {
      userId: "",
      title: "",
      post: "",
      image: "",
    };
  },
  methods: {
    change() {
      this.image = this.$refs.image.files[0];
    },
    createPost() {
      const formData = new FormData();
      formData.append('file', this.file);
      const userPost = {
        title: this.title,
        post: this.post,
        image: this.image,
      };
      axios
        .post("/posts/", userPost, formData)
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