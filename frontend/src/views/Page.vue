<template>
  <div id="pageProfile">
    <div class="infoprofile">
      <div class="profileLinks">
        <router-link to="/Post"><i class="fa-regular fa-square-plus"></i></router-link>
        <p>New post</p>
      </div>
      <div class="profile">
        <div class="img-profile-container">
          <img alt="profile picture" src="../assets/profil-test.jpg" class="imgProfile" c/>
        </div>
        <div class="edit-profile">
          <p class="name">Name</p>
          <router-link to="/"><i class="fa-solid fa-pen-to-square"></i></router-link>
        </div>
      </div>
    </div>
    <PostList/>
  </div>
</template>

<script>
import PostList from '../components/PostList.vue';
export default {
  name: "Page",
  components: {
    PostList
  }
}
</script>