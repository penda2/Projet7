<template>
  <div id="pageProfile">
    <div class="infoprofile">
      <div class="profileLinks">
        <router-link to="/CreatePost"
          ><i class="fa-regular fa-square-plus"></i
        ></router-link>
        <p>Nouveau post</p>
      </div>
      <div class="profile">
        <div class="img-profile-container">
          <img
            alt="photo de profile"
            src="../assets/profil-test.jpg"
            class="imgProfile"
            c
          />
        </div>
        <div class="edit-profile">
          <p class="name">{{ this.firstName}}</p>
          <router-link to="/"
            ><i class="fa-solid fa-pen-to-square"></i
          ></router-link>
        </div>
      </div>
    </div>
    <PostList />
  </div>
</template>

<script>
import { mapState } from "vuex";
import PostList from "../components/PostList.vue";
export default {
  name: "Page",
  computed: {
    ...mapState(["posts", "userId", "firstName"]),
  },
  components: {
    PostList,
  },
};
</script>