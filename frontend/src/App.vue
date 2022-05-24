<template>
  <div>
    <img alt="logo groupomania" src="./assets/icon-left-font.png" class="img" />
    <router-view />
  </div>
</template>

<style>
.img {
  max-width: 350px;
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
nav {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

nav a {
  font-weight: bold;
  color: #063565d7;
}

nav a.router-link-exact-active {
  color: #c77677d1;
}

#form-group,
#form-group2 {
  margin: 0;
  padding: 0 0 40px 0;
  width: 360px;
  background-color: rgba(201, 198, 198, 0.208);
  border-radius: 10px;
  position: absolute;
  left: 50%;
  right: 50%;
  box-sizing: border-box;
}
#form-group {
  transform: translate(-50%, -25%);
}

#form-group2 {
  transform: translate(-50%, -15%);
}

input {
  width: 90%;
  margin-top: 10px;
  padding: 10px;
  outline: none;
  border: 1px solid #6a696935;
  border-radius: 10px;
  box-shadow: 2px 2px 5px #9d9d9d35;
}
.form-ctrl {
  margin: 25px 10px;
}
.input-focus:hover {
  border: 2px solid #063565d7;
}
h1 {
  color: #063565d7;
}
.btn-connect {
  background-color: #063565d7;
  color: #ffffff;
}
.btn-subscribe {
  margin-top: 25px;
  background: #ffffff;
  border: 2px solid #063565d7;
}
.form-ctrl {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
label {
  font-size: 12px;
  margin-left: 5px;
  font-weight: bold;
}
</style>
