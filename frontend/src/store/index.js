import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    posts: [],
    comments: [],
    user: {},
    firstName: null,
    token: null,
    userId: null,
  },

  getters: {
    getToken(state) {
      return state.token;
    },
    getUserId(state) {
      return state.userId;
    },
    getName(state) {
      return state.firstName;
    },
  },

  actions: {
    getAllPosts({ commit }) {
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
    getAllComments({ commit }) {
      axios
        .get("/comments")
        .then((data) => {
          let comments = data.data.results;
          commit("SET_COMMENTS", comments);
          console.log(comments);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getUser({ commit }) {
      axios
        .get("/login")
        .then((data) => {
          console.log(data.data);
          let user = data.data;
          commit("SET_USER", user);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

  mutations: {
    SET_POSTS(state, posts) {
      state.posts = posts;
    },
    SET_COMMENTS(state, comments) {
      state.comments = comments;
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
  },
});
