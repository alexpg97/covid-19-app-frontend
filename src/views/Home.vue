<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../assets/logo.png">-->
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <div>
      <h4>Covid 19 info app</h4>
    </div>
    <div class="d-flex justify-content-center" >
      <div class="w-50">
        <ContinentsList></ContinentsList>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import ContinentsList from '@/components/Home/ContinentsList.vue';

export default {
  name: 'Home',
  components: {
    ContinentsList,
    // HelloWorld,
  },
};
</script>

<style scoped>

</style>
