<template>
  <div class="post-bloc">
    <div id="post-content" v-for="post in posts" :key="post.id">
      <div class="posts-group">
        <div class="profile-in-post">
          <div class="">
            <p class="userName">{{this.firstName}}</p>
            <span class="postDate">{{
              moment(post.createdDate).fromNow()
            }}</span>
          </div>
        </div>
        <div class="post-info">
          <P class="postTitle">{{ post.title }}</P>
          <p>{{ post.postBody }}</p>
          <div class="postImg-container">
            <img :src="post.image" class="postImg"/>
          </div>
        </div>
        <div class="postActions">
          <div v-if="isOwner(post.userId)" class="updateBloc">
            <router-link :to="{ name: 'UpdatePost', params: { id: post.id } }"
              ><i class="fa-solid fa-pen-to-square"></i>Modifier</router-link
            >
          </div>
          <div class="likeBloc">
            <i @click="likePost(post.id)" class="fa-regular fa-thumbs-up"></i>
            <span>{{post.totalLikes}}</span>
            <p>J'aime</p>
          </div>
          <div v-if="isOwner(post.userId)" class="deleteBloc">
            <i @click="deletePost(post.id)" class="fa-regular fa-trash-can"></i>
            <p>Supprimer</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapState, mapGetters } from "vuex";
import moment from "moment";
export default {
  name: "PostContent",
  computed: {
    ...mapState(["posts", "userId", "firstName"]),
  },
  created() {
    this.moment = moment;
    this.$store.dispatch("getAllPosts");
  },

  methods: {
    deletePost(id) {
      axios
        .delete("/posts/" + id)
        .then((response) => {
          console.log(response.data);
          this.$store.dispatch("getAllPosts");
          this.$router.push("/");
          alert("Le post a été bien supprimé!!!");
        })
        .catch((error) => {
          console.log(error);
        });
    },

    likePost(id) {
      axios
        .post("/posts/" + id)
        .then((response) => {
          console.log(response);
          this.$store.dispatch("getAllPosts");
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error);
        });
    },

    isOwner(id) {
      return id === this.userId;
    },
  },
};
</script>