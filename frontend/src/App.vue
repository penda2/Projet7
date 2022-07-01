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

.logo img {
    object-fit: cover;
    width: 60px;
    padding: 0;
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
  margin-left: 30px;
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
.btn-connect {
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
  width: 100%;
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
}
.profileLinks li {
  margin: 0 10px;
  cursor: pointer;
}
.profileLinks li:hover {
  border-bottom: 3px solid #4E5166;
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

</style>
