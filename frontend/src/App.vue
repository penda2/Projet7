<template>
  <div class="app">
    <NavBar />
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
export default {
  name: "app",
  components: {
    NavBar,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  outline: none;
  margin: 0;
  padding: 0;
  list-style-type: none;
}
#app {
  font-family: Lato, Helvetica, Arial, sans-serif;
  color: #4e5166;
}
#container {
  display: flex;
  align-content: space-between;
  justify-content: space-between;
  align-items: center;
  width: 90%;
}
.logoutBloc {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0;
  padding: 0;
}
.logo {
  display: flex;
  align-items: center;
  text-decoration: none;
}
.logo img {
  object-fit: cover;
  width: 60px;
  padding: 0;
}
.logo h1 {
  color: #fd2d01;
  font-weight: bold;
  margin: 0;
}
nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.fa-power-off,
.fa-square-plus {
  font-size: 20px;
  cursor: pointer;
}
.fa-power-off:hover {
  color: #fd2d01;
}
.profileLinks a {
  font-weight: bold;
  color: #4e5166;
  text-decoration: none;
}
.btn-edit-profile {
  background-color: #4e5166;
  color: #fff;
  border: 2px solid #4e5166;
  border-radius: 5px;
  padding: 3px;
  cursor: pointer;
  margin-left: 25px;
}
.btn-edit-profile:hover {
  background-color: #ffd7d7;
  border: 2px solid #4e5166;
  color: #4e5166;
}
.postBody {
  min-height: 70px;
}
.form-group,
.PostContainair {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 215, 215, 0.4);
  border-radius: 10px;
  padding-bottom: 15px;
}
.PostContainair p {
  font-size: 14px;
}
.postTitle {
  font-weight: bold;
  text-align: left;
  margin-bottom: 8px;
}
input {
  width: 100%;
  margin-top: 10px;
  padding: 10px;
  outline: none;
  border: 1px solid #6a696935;
  border-radius: 10px;
  box-shadow: 2px 2px 5px #9d9d9d35;
}
.form-ctrl {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 20px;
  width: 60%;
}
.form-ctrl p {
  align-self: center;
  margin: 0;
  padding: 0;
}
.form-ctrl a {
  width: 100%;
}
.input-focus:hover {
  border: 2px solid #4e5166;
}
h1 {
  color: #4e5166;
  margin: 20px;
}
.btn-connect {
  background-color: #4e5166;
  color: #fff;
  cursor: pointer;
}
.btn-connect:hover {
  background-color: #fff;
  color: #4e5166;
  border: 2px solid #4e5166;
}
.btn-subscribe {
  background: #fff;
  border: 2px solid #4e5166;
  cursor: pointer;
}
label {
  margin-left: 5px;
  font-weight: bold;
}
.infoprofile {
  position: relative;
  height: 200px;
  background-color: #4e5166;
  border-radius: 5px;
  overflow: hidden;
}
.profileLinks {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 55px;
  background-color: #ffd7d7;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 10px;
}
.profile {
  position: absolute;
  bottom: 10%;
  left: 15px;
  display: flex;
  align-items: center;
}
.profile p {
  color: #fff;
  font-weight: bold;
  margin-left: 15px;
}
.imgProfile {
  object-fit: cover;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 5px solid #ffd7d7;
  background-color: #4e5166;
  font-weight: bold;
}
/* post*/
.loadImg {
  box-shadow: none;
  border: none;
}
.profile-in-post {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}
.edit-profile {
  display: flex;
}
.edit-profile a {
  margin-left: 10px;
}
.userName {
  font-size: 16px;
  font-weight: bold;
  margin-left: 10px;
}
.fa-pen-to-square {
  color: #fff;
}
.postDate {
  font-size: 12px;
  margin-left: 5px;
  color: #999999;
}
.profile-in-post img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}
.post-info {
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
#posts-container,
.post-bloc {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #eee;
}
.post-bloc {
  flex-direction: column-reverse;
}
.posts-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0;
  border-radius: 10px;
  margin-top: 20px;
  background-color: #fff;
  border-radius: 10px;
  padding: 15px;
}
#post-content {
  display: flex;
  flex-direction: column;
  width: 90%;
  padding-top: 0;
}
.postActions {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 15px;
  border-top: 1px solid #eee;
  padding-top: 15px;
}
.fa-thumbs-up,
.fa-pen-to-square,
.fa-message,
.fa-square-plus,
.fa-trash-can {
  margin-right: 5px;
  cursor: pointer;
}
.updateBloc a,
.updateBloc .fa-pen-to-square {
  text-decoration: none;
  color: #4e5166;
}
.likeBloc,
.commentBloc,
.updateBloc,
.deleteBloc {
  display: flex;
  width: 100%;
  align-content: center;
  justify-content: center;
  align-items: center;
}
.commentBloc a {
  text-decoration: none;
}
.commentBloc span {
  margin-left: 5px;
}
</style>