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
      <p>ou</p>
    </div>
    <div class="form-ctrl">
      <router-link to="/Signup"><input type="submit" class="btn-subscribe" value="Créer un compte"/></router-link>
    </div>
  </form>
</template>

<script>
import axios from "axios";
import { mapMutations } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapMutations({
      setToken: "SET_TOKEN",
    }),
    handleSubmit() {
      const user = {
        email: this.email,
        password: this.password,
      };
      axios
        .post("/auth/login", user)
        .then((response) => {
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + response.data.token;
          this.setToken(response.data.token);
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>