<template>
 <div class="app">
    <NavBar/>
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
  text-align: center;
  color: #4E5166;
}
#container {
  display: flex;
  align-content: space-between;
  justify-content: space-between;
  align-items: center;
  width: 90%;
}
.links {
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
.logo  {
  display: flex;
  align-items: center;
}

.logo img {
    object-fit: cover;
    width: 60px;
    padding: 0;
}
.logo h1 {
  color: #FD2D01;
  font-weight: bold;
  margin: 0;
}

nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #FFD7D7;
}

nav a, .profileLinks a {
  font-weight: bold;
  color: #4E5166;
  text-decoration: none;
}
.btn-new-post, .btn-edit-profile {
  background-color: #4E5166;
  color: #ffffff;
  border: 2px solid #4E5166;
  border-radius: 5px;
  padding: 3px;
  cursor: pointer;
  margin-left: 25px;
}
.btn-new-post:hover, .btn-edit-profile:hover {
  background-color: #FFD7D7;
  border: 2px solid #4E5166;
  color: #4E5166;
}
.btn-logout {
    border: none;
    background: none;
    font-weight: bold;
    color: #4e5166;
    cursor: pointer;
}
.btn-logout:hover {
    border-bottom: 2px solid #4E5166;
    border-radius: 5px;
    padding: 8px;
}
.postBody {
  min-height: 70px;
}
#form-group, .PostContainair {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 215, 215, 0.4);
  border-radius: 10px;
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
.input-focus:hover {
  border: 2px solid #4E5166;
}
h1 {
  color: #4E5166;
  margin: 20px;
}
.btn-connect, .btn-comment {
  background-color: #4E5166;
  color: #ffffff;
}
.btn-subscribe {
  margin-top: 25px;
  background: #ffffff;
  border: 2px solid #4E5166;
}

label {
  margin-left: 5px;
  font-weight: bold;
}

.infoprofile {
  position: relative;
  height: 200px;
  background-color: #4E5166;
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
  color: #ffffff;
  font-weight:bold;
  margin-left: 15px;
}
.imgProfile {
  object-fit: cover;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 5px solid #FFD7D7;
  background-color: #4E5166;
  font-weight:bold ;
}
/* post*/
.loadImg {
  box-shadow: none;
  border: none;
}
.profile-in-post{
    display: flex;
    align-items: center;
    margin-bottom: 15px;
}
.name {
  font-size: 16px;
  font-weight: bold;
  margin-left: 10px;
}
.time {
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
#posts-container, .post-bloc {
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
.input-comment {
  width: 150px;
  background-color: #eee;
}
.btn-comment {
  width: 80px;
}

.btn-comment, .input-comment {
  margin: 0;
  padding: 5px;
  border-radius: 5px;
}
.commentBloc label {
  margin: 0 10px 0 0;
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
.likes, .commentBloc {
  display: flex;
  width: 100%;
  align-content: center;
  justify-content: center;
  align-items: center;
}

</style>
