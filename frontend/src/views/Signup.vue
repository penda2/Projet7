<template>
  <form @submit.prevent="handleSubmit" class="form-group">
    <h1>S'inscrire</h1>
    <div class="form-ctrl">
      <label>Prénom</label>
      <input
        type="text"
        class="text-names"
        v-model="firstName"
        placeholder="Charles"
        name="firstName"
      />
    </div>
    <div class="form-ctrl">
      <label>Nom</label>
      <input
        type="text"
        class="text-names"
        v-model="lastName"
        placeholder="Legrand"
        name="lastName"
      />
    </div>
    <div class="form-ctrl">
      <label>Adresse Email</label>
      <input
        type="email"
        class="input-focus"
        v-model="email"
        placeholder="exemple@email.com"
        name="email"
      />
    </div>
    <div class="form-ctrl">
      <label>Mot de passe</label>
      <input
        type="password"
        class="input-focus"
        v-model="password"
        placeholder="Mot de passe"
        name="password"
      />
    </div>
    <div class="form-ctrl">
      <input type="submit" class="btn-connect" value="Créer un compte" />
    </div>
  </form>
</template>

<script>
import axios from "axios";
import { mapState, mapActions } from "vuex";
export default {
  name: "Signup",
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    };
  },
  created() {
    this.$store.dispatch("getUser");
  },
  computed: {
    ...mapState(["user"]),
    ...mapActions("getUser"),
  },
  methods: {
    handleSubmit() {
      axios
        .post("/auth/signup", {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          console.log(response.data);
          this.user(response.data);
          this.$router.push("/login");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>