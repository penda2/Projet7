import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    posts: [],
    user: {},
    token: null,
  },

  getters: {
    getToken(state) {
      return state.token;
    },
  },

  actions: {
    getAllPosts({ commit }) {
      axios
        .get("/posts")
        .then((data) => {
          console.log(data.data);
          let posts = data.data.results;
          commit("SET_POSTS", posts);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getUser({ commit }) {
      axios
        .get("/auth/signup")
        .then((data) => {
          console.log(data.data);
          let user = data.data.results;
          commit("SET_USER", user);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },

  mutations: {
    SET_POSTS(state, posts) {
      state.posts = posts;
    },
    SET_TOKEN(state, token) {
      state.token = token;
    },
    SET_USER(state, user) {
      state.user = user;
    },
  },
});
