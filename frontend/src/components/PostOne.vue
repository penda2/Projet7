<template>
    <div class="post-bloc">
        <div id="post-content" v-for="post in posts" :key="post.id">
            <div class="posts-group">
                <div class="profile-in-post">
                    <img alt="profile picture" src="../assets/profil-test.jpg" class="img"/>
                    <div class="name-time">
                        <p class="name">userName</p>
                        <span class="time">{{moment(post.createdDate).fromNow()}}</span>
                    </div>
                </div>
                <div class="post-info">
                    <P>{{post.title}}</P>
                    <p>{{post.postBody}}</p>
                </div>
                <div class="postActions">
                    <div class="likes">
                        <p>Like</p>
                    </div>
                    <div class="commentBloc">
                        <input type="text" class="input-comment"/>
                        <input type="submit" class="btn-comment" value="Comment" />
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
    props: ['post'],
     computed: {
      ...mapState([
          'posts'
      ])
  },
    created() {
        this.moment = moment
      this.$store.dispatch('getAllPosts')
  }
}
</script>