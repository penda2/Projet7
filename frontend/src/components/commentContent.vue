<template>
    <div class="commentBloc">
        <div id="comment-content" v-for="comment in comments" :key="comment.id">
            <div class="comment-group">
                <div class="profile-in-post">
                    <img alt="photo de profile" src="../assets/profil-test.jpg" class="img"/>
                 <div class="">
                    <p class="userName">{{this.firstName}}</p>
                </div>
                </div>
              <div class="comment-info">
                <p>{{ comment.comment }}</p>
             </div>
              <span class="postDate">{{ moment(comment.createdDate).fromNow()}}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import moment from "moment";

export default {
  name: "CommentContent",
  computed: {
    ...mapState(["posts", "userId", "firstName, comments"]),
  },
  created() {
    this.moment = moment;
    this.$store.dispatch("getAllPosts", "getAllComments");
  },
};
</script>