<template>
  <form @submit.prevent="handleSubmit" class="form-group">
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
      <router-link to="/Signup"
        ><input type="submit" class="btn-subscribe" value="Créer un compte"
      /></router-link>
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
      setUserId: "SET_USERID",
      setFirstName: "SET_FIRSTNAME",
      setIsAdmin: "SET_ISADMIN"
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
          this.setUserId(response.data.userId);
          this.setFirstName(response.data.firstName);
          this.setIsAdmin(response.data.isAdmin)
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error);
          alert("Email ou mot de passe incorrect !!",
          );
        });
    },
  },
};
</script>