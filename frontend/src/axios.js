//enregistrement de la base de l'url / plus besoin d'entrer toute l'adresse 
import axios from "axios";
axios.defaults.baseURL = 'http://localhost:3000/api';
export default {
  name: "axios"
};
