<template>
  <form @submit.prevent="handleSubmit" id="form-group2">
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
      <label>Confirmer mot de passe</label>
      <input
        type="password"
        class="input-focus"
        v-model="passwordConfirm"
        placeholder="Mot de passe"
        name="passwordConfirm"
      />
    </div>
    <input type="submit" class="btn-connect" value="Créer un compte" />
  </form>
</template>

<script>
import axios from "axios";

export default {
  name: "Signup",
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirm: "",
    };
  },
  /* methods: {
    handleSubmit() {
      const userSign = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
        passwordConfirm: this.passwordConfirm,
      };
      console.log(userSign);

      axios
        .post("/signup", userSign)
        .then((res) => console.log(res.data))
        .catch((res) => console.log(err));
      //  this.$router.push('/login');
    },
  },
*/
  methods: {
    handleSubmit() {
      axios
        .post("auth/signup", {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          password: this.password,
          passwordConfirm: this.passwordConfirm,
        })
        .then((response) => {
          console.log(response.data);
        });
    },
  },
};
</script>
