<template>
  <div id="pageProfile">
    <div class="infoprofile">
      <div class="profile">
        <div class="edit-profile">
          <p class="name">Bienvenue {{ this.firstName}}</p>
        </div>
      </div>
      <div class="profileLinks">
        <router-link to="/CreatePost"
          ><i class="fa-regular fa-square-plus"></i
        ></router-link>
        <p>Nouveau post</p>
      </div>
      
    </div>
    <PostList/>
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