<template>
 <div id="homeContainer">
    <Profile/>
  </div>
</template>

<script>
import axios from 'axios'
import Profile from './Pofile.vue'
export default {
  name: 'HomeView',  
  components: {
    Profile,
  },
}
</script>

<style>

</style>
