<template>
  <div>
    <div>
      <h5>Continents list</h5>
    </div>
    <ContinentsList></ContinentsList>
  </div>
</template>

<script lang="ts">
import ContinentsList from '@/components/Home/continents/ContinentsList.vue';

export default {
  name: 'ContinentsIndex',
  components: {
    ContinentsList,
  },
};
</script>

<style scoped>

</style>
