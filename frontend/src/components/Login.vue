<template>
  <form @submit.prevent="handleSubmit" id="form-group">
    <h1>Se connecter</h1>
    <div class="form-ctrl">
      <label>Adresse Email</label>
      <input
        type="email"
        class="input-focus"
        v-model="email"
        placeholder="exemple@email.com"
      />
    </div>
    <div class="form-ctrl">
      <label>Mot de passe</label>
      <input
        type="password"
        class="input-focus"
        v-model="password"
        placeholder="Mot de passe"
      />
    </div>
    <div class="form-ctrl">
      <input type="submit" class="btn-connect" value="Connexion" />
    </div>
    <div class="form-ctrl">
      <input type="submit" class="btn-subscribe" value="Créer un compte" />
    </div>
    
  </form>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    handleSubmit() {
      const user = {
        email: this.email,
        password: this.password,
      };
      axios
        .post("/auth/login", user)
        .then((response) => {
          axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.token
          localStorage.setItem('token', JSON.stringify(response.data))
         this.$router.push('/')

        }).catch(error => {
          console.log(error);
        })
    }
  },
  mounted() {
    const token = localStorage.getItem('token')
    if(token) {
      this.$router.push('/')
    }
  }
};
</script>

<style></style>
