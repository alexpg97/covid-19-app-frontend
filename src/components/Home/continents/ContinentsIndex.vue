<template>
  <div>
    <div>
      <h5>Info per continents</h5>
    </div>
    <div class="mt-1 mb-1">
      <ContinentsList2></ContinentsList2>
    </div>
  </div>
</template>

<script lang="ts">
import ContinentsList2 from '@/components/Home/continents/ContinentsList2.vue';

export default {
  name: 'ContinentsIndex',
  components: {
    ContinentsList2,
  },
};
</script>

<style scoped>

</style>
