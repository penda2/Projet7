import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    posts: []
  },

  actions: {
    getAllPosts({ commit }) {
      axios
        .get('/posts')
        .then(data => {
          console.log(data.data);
          let posts = data.data.results;
          commit ('SET_POSTS', posts);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },

  mutations: {
    SET_POSTS (state, posts) {
      state.posts = posts
    }
  }
});
