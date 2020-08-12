<template>
  <div>
    <h1>404</h1>
    <span>Sorry, page not found</span>
    <hr>
    <span>You can <router-link to="/">Go Home</router-link></span>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

  @Component({
    components: {},
    name: 'NotFound',
  })
export default class NotFound extends Vue {

}
</script>

<style scoped>

</style>
