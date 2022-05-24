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
    <input type="submit" class="btn-connect" value="Connexion" />
    <input type="submit" class="btn-subscribe" value="Créer un compte" />
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
        .post("login", user)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style></style>
