<template>
  <div id="pageProfile">
    <div class="infoprofile">
      <div class="profileLinks">
        <ul>
          <li>
            <router-link to="/Post">Create post</router-link>
            </li>
            <li>
              <router-link to="/">Edit profile</router-link>
            </li>
        </ul>
      </div>
      <div class="profile">
        <div class="imgProfile">
        <img src="" alt="" >
        </div>
        <p class="name">Name</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Profile",

};
</script>

<style>
</style>
