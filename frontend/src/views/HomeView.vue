<template>
 <div id="homeContainer">
    <Page/>
  </div>
</template>

<script>
import Page from './Page.vue'
export default {
  name: 'HomeView',  
  components: {
    Page
},
mounted() {
    const userInfo = localStorage.getItem('userInfo')
    if(!userInfo) {
      this.$router.push('/Signup')
    }
  }
}
</script>

<style>

</style>
