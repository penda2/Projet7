<template>
    <div class="post-bloc">
        <div id="post-content" v-for="post in posts" :key="post.id">
            <div class="posts-group">
                <div class="profile-in-post">
                    <img alt="profile picture" src="../assets/profil-test.jpg" class="img"/>
                    <div class="">
                        <p class="userName">userName</p>
                        <span class="postDate">{{moment(post.createdDate).fromNow()}}</span>
                    </div>
                </div>
                <div class="post-info">
                    <P>{{post.title}}</P>
                    <p>{{post.postBody}}</p>
                </div>
                <div class="postActions">
                    <div class="updateBloc">
                       <router-link :to="{name:'UpdatePost', params:{id: post.id}}"><i class="fa-solid fa-pen-to-square"></i>Update</router-link>
                    </div>
                    <div class="likeBloc">
                        <i class="fa-regular fa-thumbs-up"></i>
                        <p>Like </p>
                    </div>
                    <div class="commentBloc">
                        <i class="fa-regular fa-message"></i>
                        <p>Comment</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import moment from "moment";
export default {
    name: "PostOne",
     computed: {
      ...mapState([
          'posts'
      ]),
  },
    created() {
        this.moment = moment
        this.$store.dispatch('getAllPosts')
  }
}
</script>