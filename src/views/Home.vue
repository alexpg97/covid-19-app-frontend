<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../assets/logo.png">-->
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <NavBar></NavBar>
    <div class="d-flex justify-content-center nav-bar-margin" >
      <div class="w-75">
        <ContinentsIndex></ContinentsIndex>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import ContinentsIndex from '@/components/Home/continents/ContinentsIndex.vue';
import NavBar from '@/components/Shared/NavBar.vue';

export default {
  name: 'Home',
  components: {
    ContinentsIndex,
    NavBar,
    // HelloWorld,
  },
};
</script>

<style scoped>
.nav-bar-margin{
  margin-top: 6%;
}
</style>
