<template>
  <div class="app">
    <NavBar />
    <div>
      <router-view/>
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
  margin-bottom: 10px;
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
.smallError {
  color: #fd2d01;
  margin-top: 3px;
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
  margin-top: 5px;
  position: relative;
  height: 120px;
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
  display: flex;
  align-items: center;
  position: relative;
  top: 18px;
}
.welcome {
  color: #fff;
  margin-left: 15px;
  font-size: 22px;
}
/* post*/
.new-post {
  font-size: 18px;
}
.loadImg {
  box-shadow: none;
  border: none;
}
.postImg-container {
	width: 100%;
	height: 300px;
  margin-top: 20px;
}
.postImg {
  object-fit: cover;
	width: 100%;
	height: 100%;
}
.profile-in-post {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.userName {
  font-size: 18px;
  font-weight: bold;
}

.postDate {
  font-size: 12px;
  color: #999999;
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
  background-color: #4e5166;
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
  margin-top: 15px;
  background-color: #fff;
  border-radius: 10px;
  padding: 15px;
}
#post-content {
  display: flex;
  flex-direction: column;
  width: 95%;
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
.fa-thumbs-up:hover, .fa-trash-can:hover {
  color: #3A8EBA;
  font-size: 18px;
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
.updateBloc .fa-pen-to-square:hover {
  color: #3A8EBA;
  font-size: 18px;
}
.likesCount {
  margin-left: 5px;
}
.likeBloc,
.updateBloc,
.deleteBloc {
  display: flex;
  width: 100%;
  align-content: center;
  justify-content: center;
  align-items: center;
}
@media all and (min-width: 500px) and (max-width: 720px) /* IPAD */
{
  .postImg-container {
    width: 100%;
    height: 400px;
    margin-top: 20px;
}
}

@media all and (min-width: 721px) and (max-width: 901px)/* tablette */
{
  .postImg-container {
    width: 100%;
    height: 450px;
    margin-top: 20px;
}
}

@media all and (min-width: 901px)/* PC */
{
  .postImg-container {
    width: 100%;
    height: auto;
    margin-top: 20px;
}
}
</style>