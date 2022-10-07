import { createStore } from 'vuex'
import axios from 'axios'
//Assemblage des modules et import du store
export default createStore({ //création du conteneur du state de l'application
  state: {
    posts: [],
    user: {},
    firstName: null,
    token: null,
    userId: null,
    isAdmin: null,
  },

  getters: {//accès au state pour y extraire des données à dispatcher
    getToken(state) {
      return state.token;
    },
    getUserId(state) {
      return state.userId;
    },
    getName(state) {
      return state.firstName;
    },
    getIsAdmin(state) {
      return state.isAdmin;
    },
  },

  actions: {
    getAllPosts({ commit }) {//requete pour obtenir la liste de tous les posts
      axios
        .get("/posts")
        .then((data) => {
          let posts = data.data.results;
          commit("SET_POSTS", posts);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    getAllLikes({ commit }) {//requete pour obtenir la liste de tous les likes
      axios
        .get("/posts")
        .then((data) => {
          let likes = data.data.results;
          commit("SET_LIKES", likes);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

  mutations: {// utilisé pour pouvoir changer les valeurs d'un state
    SET_POSTS(state, posts) {
      state.posts = posts;
    },
    SET_TOKEN(state, token) {
      state.token = token;
    },
    SET_USERID(state, userId) {
      state.userId = userId;
    },
    SET_USER(state, user) {
      state.user = user;
    },
    SET_FIRSTNAME(state, firstName) {
      state.firstName = firstName;
    },
    SET_ISADMIN(state, isAdmin) {
      state.isAdmin = isAdmin;
    },
  },
});
