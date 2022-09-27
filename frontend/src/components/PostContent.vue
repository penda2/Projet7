<template>
  <div class="post-bloc">
    <div id="post-content" v-for="post in posts" :key="post.id">
      <div class="posts-group">
        <div class="profile-in-post">
          <img
            alt="photo de profile"
            src="../assets/profil-test.jpg"
            class="img"
          />
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
          <p>{{ post.image }}</p>
        </div>
        <div class="postActions">
          <div v-if="isOwner(post.userId)" class="updateBloc">
            <router-link :to="{ name: 'UpdatePost', params: { id: post.id } }"
              ><i class="fa-solid fa-pen-to-square"></i>Modifier</router-link
            >
          </div>
          <div class="likeBloc">
            <i class="fa-regular fa-thumbs-up"></i>
            <p>J'aime</p>
          </div>
          <div class="commentBloc">
            <router-link to="/CreateComment"
              ><i class="fa-regular fa-message"></i
            ></router-link>
            <p>Commenter</p>
            <span>0</span>
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
          Swal.fire("Le post a été bien supprimé!!!");
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