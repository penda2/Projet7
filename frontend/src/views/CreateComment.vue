<template>
  <form @submit.prevent="createComment" class="form-group">
    <h1>Commenter {{ $route.params.id }}</h1>
    <div class="form-ctrl">
      <label>Commentaire</label>
      <input
        type="textarea"
        class="input-focus commentBody"
        v-model="comment"
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
  name: "CreateComment",
  data() {
    return {
      comment: "",
    };
  },
  methods: {
    createComment() {
      const commentBody = {
        comment: this.comment,
      };
      axios
        .post("/Comments/", commentBody)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>