<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../assets/logo.png">-->
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <div class="d-flex justify-content-center" >
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

export default {
  name: 'Home',
  components: {
    ContinentsIndex,
    // HelloWorld,
  },
};
</script>

<style scoped>

</style>
