<template>
  <nav>
    <div id="container">
      <div class="logo">
        <router-link to="/" class="logo">
          <img alt="logo groupomania" src="../assets/icon.png" class="img" />
          <h1>Groupomania</h1>
        </router-link>
      </div>
      <div class="logoutBloc">
        <i class="fa-solid fa-power-off" @click="logout"></i>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  methods: {
    logout() {
      localStorage.removeItem("token");
      this.$router.push("/Login");
    },
  },
};
</script>