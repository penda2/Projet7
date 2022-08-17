<template>
  <div id="pageProfile">
    <div class="infoprofile">
      <div class="profileLinks">
        <ul>
          <li>
            <router-link to="/Post"><button class="btn-new-post">New post</button></router-link>
            </li>
            <li>
              <router-link to="/"><button class="btn-edit-profile">Edit profile</button></router-link>
            </li>
        </ul>
      </div>
      <div class="profile">
        <div class="img-profile-container">
        <img alt="profile picture" src="../assets/profil-test.jpg" class="imgProfile" c/>
        </div>
        <p class="name">Name</p>
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
  },
  mounted() {
    const token = localStorage.getItem('token')
    if(!token) {
      this.$router.push('/Login')
    }
  }

};
</script>

<style>
</style>
