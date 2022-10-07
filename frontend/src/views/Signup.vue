<template>
  <form @submit.prevent="handleSubmit" class="form-group">
    <h1>S'inscrire</h1>
    <div class="form-ctrl">
      <label>Prénom</label>
      <input
        type="text"
        class="text-names"
        v-model="formSignup.firstName"
        placeholder="Charles"
        name="firstName"
      />
      <small v-if="v$.firstName.$error" class="smallError">{{v$.firstName.$errors[0].$message}}</small>
    </div>
    <div class="form-ctrl">
      <label>Nom</label>
      <input
        type="text"
        class="text-names"
        v-model="formSignup.lastName"
        placeholder="Legrand"
        name="lastName"
      />
      <small v-if="v$.lastName.$error" class="smallError">{{v$.lastName.$errors[0].$message}}</small>
    </div>
    <div class="form-ctrl">
      <label>Adresse Email</label>
      <input
        type="email"
        class="input-focus"
        v-model="formSignup.email"
        placeholder="exemple@email.com"
        name="email"
      />
      <small v-if="v$.email.$error" class="smallError">{{v$.email.$errors[0].$message}}</small>
    </div>
    <div class="form-ctrl">
      <label>Mot de passe</label>
      <input
        type="password"
        class="input-focus"
        v-model="formSignup.password"
        placeholder="Mot de passe"
        name="password"
      />
      <small v-if="v$.password.$error" class="smallError">{{v$.password.$errors[0].$message}}</small>
    </div>
    <div class="form-ctrl">
      <input type="submit" class="btn-connect" value="Créer un compte" />
    </div>
  </form>
</template>

<script>
  //import des outils nécessaires pour la sécurité des champs de ormulaire
  import { reactive, computed} from 'vue'
  import { useVuelidate } from '@vuelidate/core'
  import { required, email, minLength, maxLength } from '@vuelidate/validators'
  import axios from "axios";//gestionnnaire de requetes et promesses
  export default {
    name: "Signup",
    // préparation et séccurisation des valeurs des champs du formulaire
    setup() {
      const formSignup = reactive({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      })
      const rules = computed(() => {
        return {
          firstName : { required, maximum: maxLength(20), minimum: minLength(2) },
          lastName: { required, maximum: maxLength(20), minimum: minLength(2) },
          email: { required, email },
          password: { required,maxi: maxLength(6), mini: minLength(4) }
        }
      })
      const v$ = useVuelidate( rules, formSignup)
      return {
        formSignup,
        v$
      }
    },
    //méthode post pour la soumission du formulaire sécurisé ainsi que la gestion des eventuels erreurs
    methods: {
      handleSubmit() {
        this.v$.$validate()
        if(!this.v$.$error) {
          alert(" Bienvenue!!!")
          axios
          .post("/auth/signup", this.formSignup)
          .then((response) => {
            this.$router.push("/login");
          })
          .catch((error) => {
            console.log(error);
          });
        }
        else {
          alert("Merci d'entrer des données correctes!!")
        }
      }
    }
  };
</script>